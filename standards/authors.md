---
permalink: "/authors/"
---

{% for person in site.data.authors %}
<h2>{% if person.link %}<a href="{{ person.link }}">{% endif %}{{ person.name }}{% if person.link %}</a>{% endif %}</h2>
<p>{{person.bio}}</p>
{% endfor %}

{% include links.md %}
