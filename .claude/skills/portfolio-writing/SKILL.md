---
name: portfolio-writing
description: Write or revise prose for Daniel Kronovet's artist portfolio in this repo — the artist statement, work pages and blurbs, a bio, or application text. Use whenever drafting, editing, shortening, or reviewing anything under materials/ or any text about the artworks, so the voice, the facts, and the align-before-drafting process stay consistent.
---

# Portfolio Writing

How to write for this portfolio in the voice the artist approved.
These are Daniel Kronovet's preferences as of 2026-11-21, taken from the session that produced `materials/statement-long.md`.
What he says in the current conversation overrides anything here.

## Process: align before drafting

He asked to "discuss the statement in the chat before you draft, so we can align on what we are trying to say and what tone we want to strike."

1. Ask one round of questions before writing anything:
   - What is the piece for, who reads it, and how long should it be?
   - Should a sentence of his own open it or appear in it?
     Quote the sentence back to confirm which one he means.
   - Which works anchor it?
   - Which references are true for this piece, and what does each one lend?
   - What here is distinctively his?
   - How does it end?
2. Propose an outline in chat, one line per paragraph.
3. Draft only after he says to.
4. Once he accepts a draft, offer a cut of about 20%, which he asked for on the statement and preferred.

Take one piece at a time.
For the work pages he asked to go through "each one at a time", giving each its own round of questions.
On a work page, ask first what the work is.
His answer has changed the page every time.

Mistakes that cost rounds on the statement:

- Drafting before the claim and the tone were agreed.
- Proposing a unifying thesis of your own in place of his.
- Stitching his interview lines into a collage of quotes.
- Giving several points equal weight, so that none was the point.
- Estimating length, which ran about 20% under the real count.
- Assuming which "line I felt good about" he meant, when it was his own sentence.

## Voice

- Plain and declarative, with the works as the subjects of the sentences ("write more declaratively. I think it's implied that this is my stuff").
- No "I" ("you are writing about me, not as me"), and his name "a couple of times, but not every paragraph".
- After the full name in an opening sentence, he is "Daniel", not "Kronovet" ("I actually don't like seeing my last name like that -- my first name might land a bit softer", 2026-11-23).
- Not mannered or curatorial ("I'm not at the Whitney, and I don't want this to come off as pretentious"), so no paragraph openers that stage a reveal.
- No life narrative or scene setting: leave out dates, cities, and where he lived unless the detail is evidence for a claim.
- Formats are not the subject ("my work isn't about murals or about games as much as those are formats that I've worked in"), so openers stay general.
- Give every abstract phrase one concrete form soon after it.
- "Get a feel for", not "understand": nobody has to notice a rule to enjoy a wall.
- Use a charged word such as "enchant" once, then carry it with facts.
- Prefer a concrete noun to an adjective that asks for trust: "jewelry", not "magical".
- No attributed quotes from him, though a question of his can be posed directly, as "Where does that energy go?" is.
- Technical things in plain words, as if to someone outside the field, with blockchain named once.
- A belief system that a work draws on, such as astrology, is described neutrally as a symbolic system, with no claim that it works or does not.
- One thought per sentence, with varied sentence length.

Two pairs from the first draft and the approved text:

> Before: The method began with a borrowed rule.
> In 2009 Kronovet painted a Tibetan Buddhist endless knot on a door in his Berkeley student co-op: one band, ruled through a grid of dots, passing over and under itself.
>
> After: *Endless Knot* follows a borrowed rule, the Tibetan Buddhist endless knot, ruled through a grid of dots.

> Before: A game ends, and Kronovet’s next question is what the player takes away.
>
> After: People put dozens of hours into a game, and the only record is a save file that nobody looks at.
> Where does that energy go?

## Content

- Read `materials/statement-long.md` first: it is the approved statement and the model for voice and substance.
  `materials/statement.md`, the short statement, is its first paragraph, so keep the two in step.
- Two ideas organize the work, and its opening sentence, which he wrote, states both.
  One runs through all the work: aesthetics emerging from systems of rules.
  The other belongs to the digital work: digital technology creating meaning and value, made concrete as enchanting the real world.
- The save file as art object is what he "pretty distinctly" brings to generative and digital art.
  Give it emphasis, and credit it as his addition, not as a first.
- *Identity Matrix* and *Space Prince* are the anchor works, and the other three show earlier forms of the same ideas.
- Call other artists reference points, say what each one lends, and do not liken him to them:
  - Sol LeWitt, for running a few simple elements through every combination (he came to LeWitt later, so do not claim influence).
  - Kandinsky and Hilma af Klint, for color and shape.
  - Matt DesLauriers and Erick Calderon, for generative art: a short program that gives each collector a one-of-a-kind image.
  - Pokémon Go, for augmented reality, though his own games are laid over real places without being augmented reality.
  - A reference that bears on one work belongs on that work’s page, not in the statement.
- When he says to use a sentence he wrote, use it verbatim.
  If it conflicts with a rule here or in the guides, say so in one sentence and leave the choice to him.
- The pages in `materials/works/` are in the approved voice as of 2026-11-23, and are the models for a work page.

## Facts

- Facts about a work come from its own sources: the repository and documents linked from its page in `materials/works/`, and the technical details kept at the end of that file.
- In this repo: `materials/interviews/portfolio-conversation.md` (verbatim), `materials/interviews/portfolio-interview.md` (edited), `materials/practice-notes.md` (his phrases and connections).
- A work’s repository, its deployed contracts, and any written retrospective outrank his recollection in the interviews.
  What is deployed outranks a spec.
- Check a claim of “every”, “unique”, or “first” against the code or the data before it goes on a page.
- Say what a work in progress does today, and describe what is planned as planned.
- Keep facts and decisions about a single work out of this skill.
  They belong with the work: on its page, or in the hidden “Technical details” comment at the end of its file, which keeps contract addresses and similar details for the archive.

## Checks before showing a draft

```sh
f=materials/statement-long.md  # the file being checked
# real word count of the prose, without comments, the title, the date line, and the link row
perl -0pe 's/<!--.*?-->//gs' "$f" | grep -v -E '^(#|\*[0-9]{4}|\[)' | wc -w
# avoid list; a proper name or a literal use is a false hit
grep -n -i -E "explor|investigat|interrogat|reconceptual|deconstruct|symboliz|unpack|liminal|immersive|urgent|relational|mystical|nuanced|provocative|invited to|blurs the|dialogue between|challenges traditional|speaks to broader" "$f"
grep -n -w -E "I|my|me" "$f"   # should print nothing
grep -c "Daniel" "$f"          # lines that carry his name
grep -n "Kronovet" "$f" | grep -v "Daniel Kronovet"  # surname alone; should print nothing
```

- Verify each fact against the sources above.
- In markdown files, one sentence per line, American spelling, and curly apostrophes as the existing files use.
- Write the draft to its file and also show it in chat as flowing paragraphs.
- Report the real word count, and after a cut, list what went.
- Check a photograph for location data, and remove it, before adding it to `materials/assets/`.

## The Artist Commons guides

He treats these course slides as the standard: `~/Dropbox/Documents/Art/Artist Commons/`, files `133`, `137`, and `140` on artist statements and `113` on portfolios, readable with `pdftotext -layout`.
Paraphrase them and do not paste passages into this repo, which is pushed to GitHub.
In brief, they ask for this:

- Have a thesis, and answer three questions: what is it, what might it mean, and why does it matter beyond the artist.
- Put the why before the how, keep the how short, and be concrete, most of all in the first paragraph.
- Do not tell the viewer what to feel, write only for insiders, make grandiose claims, or quote and compare yourself to famous artists.
- In a portfolio, show who the artist is today, write toward the decision the reader has to make, and let older work read as part of the same path.

Where the guides and his decisions conflict, his decision wins.
The statement opens on his own general sentence in an "X and Y" shape, avoids "I" although the guides say to write personally, and names reference points although the guides warn against comparing yourself to the greats.
