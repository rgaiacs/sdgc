---
permalink: "/contributing/"
title: "Contributing"
---

{% include toc.md %}

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

1.  Each lesson is in a file `./slug.md`,
    where "slug" is a hyphenated short name for the topic (e.g., `implicit-bias.md`).
    `./_config.yml` contains an entry for each lesson under the key `topics`.
    Please ensure that the lesson title in `./_config.yml`
    and the `title` field in the YAML header of `./slug.md` are consistent:
    there is unfortunately no simple way to do this in Jekyll.

1.  Use relative links `{% raw %}[like this](../slug/){% endraw %}`
    to refer from one lesson to another.

1.  Put definitions of external links in the `links` table in `_config.yml`
    and refer to them using `{% raw %}[text to display][link-key]{% endraw %}`.
    (Links cannot be included in the page template `_layouts/page.html`
    because of the order in which Jekyll does link expansion and file inclusion,
    so every page must `{% raw %}{% include links.md %}{% endraw %}` as its last line.)

1.  For similar reasons,
    each `./slug.md` file should open with `{% raw %}{% include toc.md %}{% endraw %}`
    to create a table of contents.

1.  Use level-2 headings for sub-topics, and phrase these as questions
    (e.g., "How do I check if a file exists?").

1.  Place the exercises for each sub-topic at the end of that sub-topic
    and give each its own level-3 heading.

1.  Put definitions of terms in `./glossary.md`
    and link to them using `{% raw %}[some text](../glossary/#term-key){% endraw %}`.
    Jekyll automatically generates a lower-case hyphenated key for each term from the definition text,
    so "this term" has the HTML ID `this-term`.

1.  Use `{% raw %}[Key1,Key2](BIB){% endraw %}` for bibliographic citations;
    the code in `static/site.js` (which is automatically included and run in each page's footer)
    will convert these to links to appropriate entries in `references.md`.

1.  All descriptions will use first person plural ("we" rather than "you"),
    Simplified English (i.e., American spelling),
    and the Oxford comma.

{% include links.md %}
