---
permalink: "/glossary/"
---

<dl>
{% for term in site.data.glossary %}
<dt id="{{term.slug}}" markdown="1">
  {% if term.link %}<a href="{{term.link}}">{% endif %}{{term.term}}{% if term.link %}</a>{% endif %}
  {% if term.acronym %}({{term.acronym}}){% endif %}
</dt>
<dd markdown="1">
{{term.defn}}
</dd>
{% endfor %}
</dl>

{% include links.md %}
