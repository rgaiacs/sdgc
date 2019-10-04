---
permalink: "/links/"
title: "Links"
---

<table>
<tr><th>Site</th><th>Description</th></tr>
{% for link in site.links %}
<tr>
  <td><a href="{{link.link}}">{{link.name | markdownify | replace: '<p>', '' | replace: '</p>', ''}}</a></td>
  <td>{{link.lede | markdownify | replace: '<p>', '' | replace: '</p>', ''}}</td>
</tr>
{% endfor %}
</table>

{% include links.md %}
