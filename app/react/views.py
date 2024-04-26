from django.views.generic import TemplateView

# Create your views here.
class ReactView(TemplateView):
    template_name = 'react/index.html'
