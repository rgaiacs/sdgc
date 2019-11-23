LESSONS=$(wildcard */index.md)
EXTRAS=$(wildcard *.md) $(wildcard extras/*.md)
SOURCE=${LESSONS} ${EXTRAS}

# Controls
all : commands

## commands : show all commands.
commands :
	@grep -h -E '^##' ${MAKEFILE_LIST} | sed -e 's/## //g'

## build    : rebuild site without serving it.
build :
	rm -rf .jekyll-cache .jekyll-metadata _site
	jekyll build

## serve    : rebuild site and serve it.
serve:
	rm -rf _site
	jekyll serve -I

## bib      : regenerate Markdown bibliography from BibTeX.
bib:
	bin/bib2md.py < etc/references.bib > extras/references.md

## ----------------------------------------

## links    : Check that all links resolve.
links:
	bin/checklinks.py _data/links.yml _data/glossary.yml *.md extras/*.md */index.md _data/*.yml

## clean    : Clean up stray files.
clean:
	rm -rf $$(cat .gitignore)
	find . -name '*~' -exec rm {} \;

## settings : Show values of variables.
settings :
	@echo LESSONS: ${LESSONS}
	@echo EXTRAS: ${EXTRAS}
	@echo SOURCE: ${SOURCE}
