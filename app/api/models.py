"""
Database models.
"""
import uuid
import os

from django.conf import settings
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.core.validators import MaxValueValidator, MinValueValidator 


def card_image_file_path(instance, filename):
    """Generate file path for new card image."""
    ext = os.path.splitext(filename)[1]
    filename = f'{uuid.uuid4()}.{ext}'

    return os.path.join('uploads', 'cards', filename)


class UserManager(BaseUserManager):
    """Manager for users."""

    def create_user(self, email, password=None, **extra_fields):
        """Create, save and return a new user."""
        if not email:
            raise ValueError('User must have an email address.')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """Create and return a new superuser."""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """User in the system."""
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    catalog_number = models.BooleanField(default=False)
    expiration_date = models.BooleanField(default=False)
    gsm_operator = models.BooleanField(default=False)
    magnetic_stripe_width = models.BooleanField(default=False)
    material_type = models.BooleanField(default=False)
    nr_of_pulses = models.BooleanField(default=False)
    number_printype = models.BooleanField(default=False)
    number_type = models.BooleanField(default=False)
    prefix = models.BooleanField(default=False)
    price = models.BooleanField(default=False)
    value = models.BooleanField(default=False)
    printed_amount = models.BooleanField(default=False)
    producer = models.BooleanField(default=False)
    production_date = models.BooleanField(default=False)
    publisher = models.BooleanField(default=False)
    series = models.BooleanField(default=False)
    shape = models.BooleanField(default=False)
    surface_type = models.BooleanField(default=False)
    chip_type = models.BooleanField(default=False)
    comment = models.BooleanField(default=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'


class PendingCard(models.Model):
    """Phone card without completed data."""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=64)
    awers = models.ImageField(upload_to=card_image_file_path)
    rewers = models.ImageField(upload_to=card_image_file_path)

    class Types(models.TextChoices):
        MAGNETIC = 'MAGNETIC'
        CHIP = 'CHIP'
        GSM = 'GSM'
        ASSOCIATED_WITH_TELEPHONY = 'ASSOCIATED_WITH_TELEPHONY'
        OTHER_TOP_UPS = 'OTHER_TOP_UPS'
        POLONIA = 'POLONIA'
        OTHER = "OTHER"

    type = models.CharField(max_length=32, choices=Types, default=Types.OTHER)

    def __str__(self):
        return f'{self.id}. {self.name}'


class Card(models.Model):
    """Phone card."""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    class Types(models.TextChoices):
        MAGNETIC = 'MAGNETIC'
        CHIP = 'CHIP'
        GSM = 'GSM'
        ASSOCIATED_WITH_TELEPHONY = 'ASSOCIATED_WITH_TELEPHONY'
        OTHER_TOP_UPS = 'OTHER_TOP_UPS'
        POLONIA = 'POLONIA'
        OTHER = "OTHER"

    type = models.CharField(max_length=32, choices=Types, default=Types.OTHER)
    name = models.CharField(max_length=64)
    awers = models.ImageField(upload_to=card_image_file_path)
    rewers = models.ImageField(upload_to=card_image_file_path)

    catalog_number = models.CharField(max_length=128, blank=True)
    printed_amount = models.CharField(max_length=64, blank=True)

    class NrOfPulses(models.IntegerChoices):
        FIVE = 5
        TEN = 10
        FIFTEEN = 15
        TWENTY = 20
        TWENTY_FIVE = 25
        THIRTY = 30
        THIRTY_FIVE = 35
        FIFTY = 50
        ONE_HUNDRED = 100
        ONE_HUNDRED_FIFTY = 150
        TWO_HUNDRED = 200

    nr_of_pulses = models.IntegerField(choices=NrOfPulses, blank=True, null=True)
    price = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    value = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    production_date = models.DateField(blank=True, null=True)
    expiration_date = models.DateField(blank=True, null=True)
    series = models.CharField(max_length=64, blank=True)
    prefix = models.PositiveBigIntegerField(validators=[MinValueValidator(100), MaxValueValidator(9999)], blank=True, null=True)
    producer = models.CharField(max_length=64, blank=True)

    class Materials(models.TextChoices):
        CARTOON = "CARTOON"
        PLASTIC = "PLASTIC"
        OTHER = "OTHER"

    material_type = models.CharField(max_length=32, choices=Materials, blank=True)

    class Shapes(models.TextChoices):
        RECTANGLE = "RECTANGLE"
        CIRCLE = "CIRCLE"
        HEART = "HEART"
        OTHER = "OTHER"

    shape = models.CharField(max_length=32, choices=Shapes, blank=True)

    class Surfaces(models.TextChoices):
        MAT = "MAT"
        GLOSS = "GLOSS"
        COATED = "COATED"
        MAT_COATED = "MAT_COATED"
        OTHER = "OTHER"

    surface_type = models.CharField(max_length=32, choices=Surfaces, blank=True)

    class PrintTypes(models.TextChoices):
        EMBOSSED_HORIZONTAL = "EMBOSSED_HORIZONTAL"
        EMBOSSED_VERTICAL = "EMBOSSED_VERTICAL"
        PRINTED_HORIZONTAL = "PRINTED_HORIZONTAL"
        PRINTED_VERTICAL = "PRINTED_VERTICAL"

    number_printype =  models.CharField(max_length=32, choices=PrintTypes, blank=True)
    number_type = models.CharField(max_length=64, blank=True)
    magnetic_stripe_width = models.CharField(max_length=64, blank=True)

    class GsmOperators(models.TextChoices):
        ERA = "ERA"
        TAK_TAK = "TAK_TAK"
        IDEA = "IDEA"
        POP = "POP"
        ORANGE = "ORANGE"
        PLUS = "PLUS"
        SIMPLUS = "SIMPLUS"
        PLUSH = "PLUSH"
        HEYAH = "HEYAH"
        PLAY = "PLAY"
        REDBULL = "REDBULL"
        OTHER = "OTHER"

    gsm_operator = models.CharField(max_length=32, choices=GsmOperators, blank=True)

    class ChipTypes(models.TextChoices):
        MANUFACTURER = "MANUFACTURER"
        PATTERN = "PATTERN"
        IMAGE = "IMAGE"

    chip_type = models.CharField(max_length=32, choices=ChipTypes, blank=True)

    # sim_cardtype_number = models.CharField(max_length=32)
    # sim_cardtype_image = models.ImageField(upload_to=card_image_file_path)
    # sim_damage_number = models.CharField(max_length=32)
    # sim_damage_image = models.ImageField(upload_to=card_image_file_path)

    publisher = models.CharField(max_length=64, blank=True)

    class Status(models.TextChoices):
        HAVE = "HAVE"
        MISSING = "MISSING"
        EXCESS = "EXCESS"

    status = models.CharField(max_length=32, choices=Status)
    comment = models.CharField(max_length=512, blank=True)

    def __str__(self):
        return f'{self.id}. {self.name}'
