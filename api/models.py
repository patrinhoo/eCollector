"""
Database models.
"""
import uuid
import os

from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.core.validators import MaxValueValidator, MinValueValidator 


def recipe_image_file_path(instance, filename):
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

    objects = UserManager()

    USERNAME_FIELD = 'email'


class Card(models.Model):
    """Phone card."""
    catalog_number = models.CharField(max_length=128)
    name = models.CharField(max_length=64)
    awers = models.ImageField(upload_to=recipe_image_file_path)
    rewers = models.ImageField(upload_to=recipe_image_file_path)
    printed_amount = models.CharField(max_length=64)

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

    nr_of_pulses = models.IntegerField(choices=NrOfPulses)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    production_date = models.DateField()
    expiration_date = models.DateField()
    series = models.CharField(max_length=64)
    prefix = models.PositiveBigIntegerField(validators=[MinValueValidator(100), MaxValueValidator(9999)])
    producer = models.CharField(max_length=64)

    class Materials(models.TextChoices):
        CARTOON = "CARTOON"
        PLASTIC = "PLASTIC"
        OTHER = "OTHER"

    material_type = models.CharField(max_length=32, choices=Materials, default=Materials.OTHER)

    class Shapes(models.TextChoices):
        RECTANGLE = "RECTANGLE"
        CIRCLE = "CIRCLE"
        HEART = "HEART"
        OTHER = "OTHER"

    shape = models.CharField(max_length=32, choices=Shapes, default=Shapes.OTHER)

    class Surfaces(models.TextChoices):
        MAT = "MAT"
        GLOSS = "GLOSS"
        COATED = "COATED"
        MAT_COATED = "MAT_COATED"
        OTHER = "OTHER"

    surface_type = models.CharField(max_length=32, choices=Surfaces, default=Surfaces.OTHER)

    class PrintTypes(models.TextChoices):
        EMBOSSED_HORIZONTAL = "EMBOSSED_HORIZONTAL"
        EMBOSSED_VERTICAL = "EMBOSSED_VERTICAL"
        PRINTED_HORIZONTAL = "PRINTED_HORIZONTAL"
        PRINTED_VERTICAL = "PRINTED_VERTICAL"

    number_printype =  models.CharField(max_length=32, choices=PrintTypes)
    number_type = models.CharField(max_length=64)
    magnetic_stripe_width = models.CharField(max_length=64)

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

    gsm_operator = models.CharField(max_length=32, choices=GsmOperators, default=GsmOperators.OTHER)

    class ChipTypes(models.TextChoices):
        MANUFACTURER = "MANUFACTURER"
        PATTERN = "PATTERN"
        IMAGE = "IMAGE"

    chip_type = models.CharField(max_length=32, choices=ChipTypes)

    # TODO: wyjaśnić
    # sim_cardtype_number = models.CharField(max_length=32)
    # sim_cardtype_image = models.ImageField(upload_to=recipe_image_file_path)
    # sim_damage_number = models.CharField(max_length=32)
    # sim_damage_image = models.ImageField(upload_to=recipe_image_file_path)

    publisher = models.CharField(max_length=64)

    class Status(models.TextChoices):
        HAVE = "HAVE"
        MISSING = "MISSING"
        EXCESS = "EXCESS"

    status = models.CharField(max_length=32, choices=Status)
    comment = models.CharField(max_length=512)
