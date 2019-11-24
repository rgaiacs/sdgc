{% if page.title %}
{% assign the_title = page.title %}
{% assign the_lede = page.lede %}
{% else %}
  {% assign thispage = site.data.lessons | where: "link", page.dir | first %}
  {% unless thispage %}
    {% assign thispage = site.data.extras | where: "link", page.dir | first %}
  {% endunless %}
  {% assign the_title = thispage.name %}
  {% assign the_lede = thispage.lede %}
{% endif %}
