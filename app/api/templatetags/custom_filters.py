from django import template

register = template.Library()

@register.filter
def translate_type(value):
    type_dict = {
        'MAGNETIC': 'MAGNETYCZNE',
        'CHIP': 'CHIPOWE',
        'GSM': 'GSM',
        'ASSOCIATED_WITH_TELEPHONY': 'POWIĄZANE Z TELEFONIĄ',
        'OTHER_TOP_UPS': 'DOŁADOWANIA RÓŻNE',
        'POLONIA': 'KARTY POLONIJNE',
        'OTHER': 'INNE',
    }
    return type_dict.get(value, value)

@register.filter
def translate_status(value):
    type_dict = {
        'HAVE': 'MAM',
        'MISSING': 'BRAK',
        'EXCESS': 'NADWYŻKA',
    }
    return type_dict.get(value, value)

@register.filter
def translate_material_type(value):
    type_dict = {
        'CARTOON': 'KARTON',
        'PLASTIC': 'PLASTIK',
        'OTHER': 'INNY',
    }
    return type_dict.get(value, value)

@register.filter
def translate_shape(value):
    type_dict = {
        'RECTANGLE': 'PROSTOKĄT',
        'CIRCLE': 'KOŁO',
        'HEART': 'SERCE',
        'OTHER': 'INNY',
    }
    return type_dict.get(value, value)

@register.filter
def translate_surface_type(value):
    type_dict = {
        'MAT': 'MATOWA',
        'GLOSS': 'BŁYSZCZĄCA',
        'COATED': 'LAKIEROWANA',
        'MAT_COATED': 'MATOWA/LAKIEROWANA',
        'OTHER': 'INNY',
    }
    return type_dict.get(value, value)

@register.filter
def translate_number_printype(value):
    type_dict = {
        'EMBOSSED_HORIZONTAL': 'TŁOCZONY POZIOMY',
        'EMBOSSED_VERTICAL': 'TŁOCZONY PIONOWY',
        'PRINTED_HORIZONTAL': 'DRUKOWANY POZIOMY',
        'PRINTED_VERTICAL': 'DRUKOWANY PIONOWY',
    }
    return type_dict.get(value, value)

@register.filter
def translate_gsm_operator(value):
    type_dict = {
        'ERA': 'ERA',
        'TAK_TAK': 'TAK TAK',
        'IDEA': 'IDEA',
        'POP': 'POP',
        'ORANGE': 'ORANGE',
        'SIMPLUS': 'SIMPLUS',
        'PLUSH': 'PLUSH',
        'HEYAH': 'HEYAH',
        'PLAY': 'PLAY',
        'REDBULL': 'REDBULL',
        'OTHER': 'INNY',
    }
    return type_dict.get(value, value)

@register.filter
def translate_chip_type(value):
    type_dict = {
        'MANUFACTURER': 'PRODUCENT',
        'PATTERN': 'WZÓR',
        'IMAGE': 'OBRAZ',
    }
    return type_dict.get(value, value)