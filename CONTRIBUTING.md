---
permalink: "/contributing/"
title: "Contributing"
---

## Making Decisions

This project uses Martha's Rules for consensus decision making [Mina1986](BIB):

1.  Before each meeting, anyone who wishes may sponsor a proposal by filing an issue in the GitHub repository tagged "proposal".
    Proposals must be filed at least 24 hours before a meeting in order to be considered at that meeting, and must include:
    -   a one-line summary (the subject line of the issue)
    -   the full text of the proposal
    -   any required background information
    -   pros and cons
    -   possible alternatives

2.  A quorum is established in a meeting if half or more of voting members are present.

3.  Once a person has sponsored a proposal, they are responsible for it.
    The group may not discuss or vote on the issue unless the sponsor or their delegate is present.
    The sponsor is also responsible for presenting the item to the group.

4.  After the sponsor presents the proposal,
    a "sense" vote is cast for the proposal prior to any discussion:
    -   Who likes the proposal?
    -   Who can live with the proposal?
    -   Who is uncomfortable with the proposal?

5.  If all or most of the group likes or can live with the proposal,
    it is immediately moved to a formal vote with no further discussion.

6.  If most of the group is uncomfortable with the proposal,
    it is postponed for further rework by the sponsor.

7.  If some members are uncomfortable they can briefly state their objections.
    A timer is then set for a brief discussion moderated by the facilitator.
    After 10 minutes or when no one has anything further to add (whichever comes first),
    the facilitator calls for a yes-or-no vote on the question:
    "Should we implement this decision over the stated objections?"
    If a majority votes "yes" the proposal is implemented.
    Otherwise, the proposal is returned to the sponsor for further work.

## Development Process

1.  Use `discussion` to label general discussion threads,
    `proposal` to identify proposals that need to be voted on,
    and `bug` for things that need to be fixed.

1.  When starting work on a subject,
    create an issue labelled `in progress` and assign it to yourself.
    Use `help wanted` if you need assistance or want someone else to take it over,
    `in review` when the pull request is ready for review or being reviewed,
    and `ready to publish` when work is ready for publication

1.  The first draft for each topic should be point-form notes and working code.
    We will reorganize these once we have written enough to see overall scope.

## Format

1.  We use [Jekyll][jekyll] to create a [GitHub Pages][github-pages] site for this project,
    so please write in [GitHub-Flavored Markdown][gfm].

1.  Each lesson is in a file `./slug/index.md`,
    where "slug" is a hyphenated short name for the topic (e.g., `package-size`).
    `data/lessons.yml` contains an entry for each lesson;
    the `link` field in the entry
    and the `permalink` field in the YAML header of `./slug/index.md`
    must be consistent.

1.  Use relative links `{% raw %}[like this](../slug/){% endraw %}`
    to refer from one lesson to another.

1.  Use level-2 headings for sub-topics, and phrase these as questions
    (e.g., "How do I check if a file exists?").

1.  Place the exercises for each sub-topic at the end of that sub-topic
    and give each its own level-3 heading.

1.  Put definitions of external links in the `links` table in `_data/links.yml`
    and refer to them using `{% raw %}[text to display][link-key]{% endraw %}`.
    (We cannot put this in the page template
    because of the order in which Jekyll does link expansion and file inclusion.)
    Entries should be in alphabetical order by slug and each should look like this:

    ```
    - slug: gfm
      link: https://github.github.com/gfm/
      name: "GitHub-Flavored Markdown"
      lede: "Describes the variant of Markdown used in GitHub Pages."
    ```

1.  When defining a term,
    use `{% raw %}[some text][some-key]{% endraw %}` in the text
    and add an entry like this to the table in `_data/glossary.yml`
    (in alphabetical order by term):

    ```
    - term: "data science"
      slug: data-science
      defn: |
        Statistics, but less rigorous and better paid.
    ```

    If a `link` field is present in the YAML,
    the term name will be wrapped in that link.
    If an `acronym` field is present,
    the acronym will be included after the term name.

1.  Use `{% raw %}[Key1,Key2](BIB){% endraw %}` for bibliographic citations;
    the code in `static/site.js` (which is automatically included and run in each page's footer)
    will convert these to links to appropriate entries in `references.md`.

1.  Do not update `references.md` manually.
    Instead,
    use `bin/bib2md.py` to regenerate it from `references.bib`.

1.  Use the following to include external figures:

    ```
    {% raw %}{% include figure.html id="f:slug:stem" src="figures/stem.svg" caption="Caption" %}{% endraw %}
    ```

    where `slug` is the lesson slug and `stem` is the stem of the filename,
    and use `{% raw %}[f:slug:stem](FIG){% endraw %}` to refer to the figure.

1.  Use first person plural ("we" rather than "you"),
    Simplified English (i.e., American spelling),
    dashes instead of underscores,
    and the Oxford comma.

{% include links.md %}
