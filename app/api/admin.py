from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _

from . import models


class UserAdmin(BaseUserAdmin):
    """Define the admin pages for users."""
    ordering = ['id']
    list_display = ['email', 'name']
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (None, {'fields': ('name',)}),
        (
            _('Permissions'),
            {
                'fields': (
                    'is_active',
                    'is_staff',
                    'is_superuser',
                )
            }
        ),
        (
            _('Settings'),
            {
                'fields': (
                    'catalog_number',
                    'expiration_date',
                    'gsm_operator',
                    'magnetic_stripe_width',
                    'material_type',
                    'nr_of_pulses',
                    'number_printype',
                    'number_type',
                    'prefix',
                    'price',
                    'value',
                    'printed_amount',
                    'producer',
                    'production_date',
                    'publisher',
                    'series',
                    'shape',
                    'surface_type',
                    'chip_type',
                    'comment',
                )
            }
        ),
        (_('Important dates'), {'fields': ('last_login',)})
    )
    readonly_fields = ['last_login']
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email',
                'password1',
                'password2',
                'name',
                'is_active',
                'is_staff',
                'is_superuser',
            )
        }),
    )

admin.site.register(models.User, UserAdmin)
admin.site.register(models.Card)
admin.site.register(models.PendingCard)
