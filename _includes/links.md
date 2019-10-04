{% comment %}
A table of named links to be included at the foot of every Markdown page.
(It cannot be put in the layout template because of Jekyll's processing order.)
{% endcomment %}
{% for link in site.links %}
[{{link.slug}}]: {{link.link}}
{% endfor %}
