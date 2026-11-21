# Artist portfolio conversation

Verbatim dialogue between Daniel Kronovet and Codex, from the initial portfolio discussion through the request to preserve the conversation.

## Daniel Kronovet

We are creating an artist portfolio website for my art practice, using Next.js and deployed to Vercel. Let's discuss how to approach this task, then help me execute it.

## Codex

I’ll check what’s already in the repo, then use the planning, frontend-design, and Sites skills to frame the design choices we should discuss before building.

## Codex

I’d start with one work you’d want a first-time visitor to encounter and design its page at phone and desktop sizes. A painting might need a full view followed by close-ups. An installation might need a sequence that shows how someone moves through it. That first page will tell us more about the right layout than choosing a gallery grid in advance.

## Codex

What kind of work do you make, and which piece or series would you start with? A description, image, or link is enough.

## Codex

Who would you most like the site to reach, and what would you like them to do or understand after seeing the work?

## Codex

I’d build the first version of **kronosapiens.art** around one piece or series you’d want a visitor to spend time with.
The repo currently contains a README and `.gitignore`, so we can let the work guide the design from the start.

1. **Design one work page.** Use the actual material to decide what someone encounters first, how much context they need, and what they should be able to see, hear, or interact with on a phone.
2. **Build the portfolio around it.** My starting proposal is a selected-work homepage, a shareable page for each piece or series, and a short About page with contact information. We can choose the homepage layout once we see how the works relate.
3. **Review it on Vercel.** I’ll build the first pass in Next.js and deploy a preview so we can review it on real devices before putting it on the domain. [Vercel preview deployments](https://vercel.com/docs/deployments/environments)

Which piece or series would you show someone first, and who do you picture showing it to?
A link, an image, or a few sentences about the work is enough to start.

## Daniel Kronovet

Let's actually start by developing the materials -- the list of works, some descriptions, my artist statement, etc as markdown files, and then use those as the basis for designing the site itself

## Codex

I’ll set up Markdown files for the works and artist statement. We can start with rough notes on one piece, draft its description together, and use the language that emerges across pieces to shape the statement.

## Codex

I created two Markdown files for the portfolio materials.

- [Works](/Users/kronosapiens/code/personal/kronosapiens.art/materials/works.md) keeps the inventory and descriptions together. A title is enough to start an entry.
- [Artist statement](/Users/kronosapiens/code/personal/kronosapiens.art/materials/artist-statement.md) has a few drafting prompts. Once we’ve described a few pieces, we can draw on your own words about what connects them.

**Which works or series are you considering for the portfolio?**
Send a rough list in any order.
If one piece comes readily to mind, tell me what someone encounters when they see or experience it.
I’ll use that to draft the first description.

## Daniel Kronovet

Here is a simple google doc I made earlier this year when I was applying for artist commons, a year-long emerging artist program, whihc we can use as a baseline:

https://docs.google.com/document/d/1wm5uqvd4IhUhb5IbGXA4oRLwQfsnQP5zGkwmHBhL3W0/edit?tab=t.0#heading=h.43dkspkkx3sh

## Codex

I’ll read the application, pull the works and descriptions into the Markdown inventory, and use your wording as the starting point for the artist statement.

## Codex

The application lists five works, from *Infinite Knot* (2009) to *Space Prince* (2026, in progress). It gives titles, media, and documentation links. I’m using the linked photographs and project materials for the descriptions, and I’ll mark the artist statement as a new draft.

## Codex

I added all five works and preserved all nine documentation links from your [Artist Commons portfolio](https://docs.google.com/document/d/1wm5uqvd4IhUhb5IbGXA4oRLwQfsnQP5zGkwmHBhL3W0/edit).

[Works](/Users/kronosapiens/code/personal/kronosapiens.art/materials/works.md) now has a short description of each piece, grounded in the photographs and game materials.

The [artist statement](/Users/kronosapiens/code/personal/kronosapiens.art/materials/artist-statement.md) is a new draft in your voice.
It starts with a connection I see between two works. In *Infinite Knot*, someone can follow the painted band with their eye. In *The Lost Temple Adventure*, someone has to play to find out where the line on their map goes.

**Does that connection feel like part of your practice?**
I’d like to hear what drew you to make *Infinite Knot* in the first place. That memory would give us something in your own words to build the statement around.

## Daniel Kronovet

No, I'll draft my own artist statement. scaffold it as statement.md and I'll write it myself

## Codex

I’ll move the scaffold to `materials/statement.md` and clear the draft so you can write it yourself.

## Codex

[materials/statement.md](/Users/kronosapiens/code/personal/kronosapiens.art/materials/statement.md) now contains only the heading `# Artist statement`, ready for your draft.

## Daniel Kronovet

Let's commit these initial documents so far

## Codex

I’ll check the files and stage the two portfolio documents for a `docs:` commit.

## Codex

Committed the artist statement and selected works as `412690e` (`docs: add artist statement and selected works`).

The working tree is clean, and `main` is one commit ahead of `origin/main`.

## Daniel Kronovet

Great. Before writing further, let's review my portfoliio and materials so far and discuss how to proceed.

## Codex

I’ll read the current statement and works list together, then share what comes through about your practice and which questions seem worth discussing before you write more.

## Codex

The portfolio gives me a clear sense of what it’s like to encounter the work. I can picture someone studying a staged ’90s living room for a clue in *The Lost Temple Adventure*, or watching a new sword appear on the rack in *Ronin’s Pact*. I have less of a sense of the choices that were yours to make. That’s where I’d take the conversation next. [Selected works](materials/works.md)

Your statement names two interests. The first, how aesthetics emerge from rules, already comes through in the portfolio. In *Space Prince*, a time and place determine a chart, the chart governs an encounter, and the encounter leaves a star. “Meaning and value” is more open. The map in *Lost Temple* gives us a concrete way to talk about it. What interested you about a player keeping the map after the hunt was over? Your answer could deepen the work description while the statement stays concise. [Artist statement](/Users/kronosapiens/code/personal/kronosapiens.art/materials/statement.md)

**I’d settle the selection before polishing the prose.** These five works were chosen for an emerging-artist application. With three recent games leading and two earlier physical pieces closing, I read the portfolio as a game-centered practice with a history in painting and stencil work. The descriptions of *Identity Matrix* and *Infinite Knot* tell me what the photographs show. A detail about how you devised the signs or why you painted on that particular door could give either piece a different weight.

Is that game-centered reading how you want someone to understand your practice today? And is there a work you left out of the application that would change that impression?

## Daniel Kronovet

No, these five works are my entire portfolio, and I am trying to tell a story that ties them together into a coherent set of interests beyond a single specific program application. Look at the resources in Dropbox/Documents/Art/AristCommons about how to create a portfolio and write an artist statement, and then let's discuss how to turn these ideas into a more coherent story. I think starting with your questions to me about what was interesting to me about these various works would be a good next place to start. A good intermediate goal would be to elaborate on my influences and motivations, and tie each of my works back to those.

## Codex

I’ll read the Artist Commons resources alongside your five entries, then start with a question about a specific choice you made. We can use your answers to identify which influences and motivations recur across the work.

## Codex

I’d start by talking through all five works, one at a time. Once we’ve heard the story of each, we can put them side by side and ask which interests persisted, which changed, and what each piece adds to your practice.

The Artist Commons portfolio guide suggests looking for questions and methods that recur across different media. The statement workshop gives us a way to find them. Have someone look at a piece and ask the artist about it, then listen for the phrases the artist naturally uses. The session on influences adds a good follow-up: when you name something that influenced you, trace it to a particular choice you made. [Portfolio guide](</Users/kronosapiens/Dropbox/Documents/Art/Artist Commons/113.How_to_Build_a_Portfolio.pdf>) · [Statement workshop](</Users/kronosapiens/Dropbox/Documents/Art/Artist Commons/140.Artist_Commons-How_to_Write_an_Artist_Statement-Part3-Haiver-Slides.pdf>) · [Session on influences](</Users/kronosapiens/Dropbox/Documents/Art/Artist Commons/129.Nothing_is_Original-Takeaway__Document.pdf>)

**Let’s start with *Infinite Knot*.** Take me back to 2009 and that yellow door. How did you come to paint that particular knot there? I’d especially like to hear where the form came from for you and what held your attention about it at the time.

## Daniel Kronovet

I was an undergraduate student at UC Berkeley, living in the student housing coops. Being a Berkeley student, I was very exposed to the sort of Northern Californian spirituality with all of the Buddhist influences. And I became really enamored with the Buddhist Tibetan endless knot geometric symbol. I just found it to be so beautiful and pleasing and I loved the visual effect of the patterning over and under, creating this eternal knot effect. And I just thought it was so beautiful. In the Berkeley coops there was a practice of students executing murals as a part of living in the house. All the houses, or most of them, were known for these elaborate beautiful murals on the walls and contributing a mural was a way to contribute to the cultural life of the group. In almost every house that I lived in (in three houses), I would execute one of these knots as a mural in the house. Every house I lived in for at least a semester The image I'm showing here was the first one I ever did in a house called Casa Zimbabwe, which was 124 students. And I had never done one before and I didn't want to take up prime visible real estate in the house. So I chose a kind of small out-of-the-way stairwell and kind of gave it a shot. Executing, it began with a sketch. I had taken some architecture courses so the idea of starting with a draft made sense to me. I would measure the space. The knot is a geometric shape so it's a very mathematical construction. You begin with the space and then you just arrange the grid of dots exactly uniformly in the space. And then with those dots you then follow a specific line pattern of over-under to create the basic outline. And then once the outline was in place, you executed the painting, which goes from being a ruler and pencil to being technique with a paintbrush. At that point it's really just coloring inside the lines. There's no amazing artistry needed. Again it's a technical execution.

Choosing, I think, a good color scheme is an aesthetic choice. In this one I believe it was more of a green, like a greenish-blue. In others I would do, again, a greenish-blue but then later on a red and gold. But the actual execution is just painting in the lines and that requires a little bit of care and thought but no deep inspiration. I found that executing the piece was actually really just more meditation, I think, appropriately for the subject matter itself of the Tibetan knots. And so it was a very meditative almost spiritual practice of executing on this shape in this site-specific way, in a way that I felt added to the space that I was living in. I've tried to find photos of the other ones but it's been surprisingly hard. This was 16 years ago and so my mobile phones now are deep in storage. I'd have to go rummaging through them to try to get the photos out. But yeah that was the idea.

## Codex

What strikes me is the order of things. You loved the endless knot before you knew how to make one. Your exposure to Tibetan Buddhist imagery gave you the form, the Berkeley co-op mural tradition gave you a reason to paint it, and your architecture courses gave you a way to begin. Choosing an out-of-the-way stairwell at Casa Zimbabwe let you try something for the first time while contributing to a place you shared.

I’d hold on to your phrase **“coloring inside the lines.”** By the time you picked up the brush, the measured grid and the over-under pattern had already settled most of the decisions. You describe that part as meditative. That gives your interest in rules a dimension I couldn’t have gotten from the photograph. The construction explains how the knot looks. Your account explains how it felt to spend time making it, and why you chose to do it again in another house.

**How did *Identity Matrix* begin?** With the knot, you can name the exact form that caught your eye. Where did the signs in the stencil come from, and what did the word *identity* in the title mean to you at the time?

## Daniel Kronovet

Yeah Identity Matrix came a lot later. I was living in Yaffo at the time in Israel/Palestine and I was in a community of creative people. Everyone was making art and I was in a place in my life: I had finished graduate school. I was sort of earlyish career, working remotely for a British crypto company. And just wanted to explore myself creatively in this sort of beautiful environment. And so where it actually started was: I had gotten a sketchbook and I just started drawing lines, just doodling lines, kind of almost a stream of consciousness in a sketchbook. And I kind of looked at one of the sheets of my chicken scratch and I noticed that a few of the doodles actually looked like kind of interesting shapes. I sort of saw, what's the word, when you see faces in objects. I felt I saw a face, what looked to me like a face in profile, just a nose and a mouth. Then I saw one that looked like a face in, I suppose, portrait, so straight on, just eyes and a mouth and a nose. Then I saw an image that looked almost like a person, an abstracted person maybe holding some balloons, so the three stars, and that was, I suppose, a person at a distance. I kind of had these doodles of this sort of face in portrait, face in profile, and person at a distance and it was sort of three. And I had gotten some spray paint because a lot of people in my friend group were doing street art. So I was playing around with the idea of stenciling, and doing street art was something that I already wanted to be exploring and trying out. Similarly to in the co-ops, there were murals. In the Yaffo community in that larger area, there was a very vibrant street art stencil culture and that's how people, again, contributed to the shared culture of the group. I had some spray paint and when I got in the paint I also thought, "How many colors do I need? Let me try to think of some nice colors that I can recombine effectively."

I thought, "Okay I'm not a color theorist but let's start with some primary basic colors. Let's start with a yellow." I ended up going with kind of a fuchsia, so like an orange, a fuchsia, and then a kind of pleasant teal: not quite red, yellow, blue, but a kind of fun variation (almost a rotation down the color wheel towards some more composite colors that still existed in a kind of three-part relationship). So then I thought, okay, I have these three images and I have these three colors. How can I try to systematize this into a complete expression of some kind of concept? And I thought, well, if I chose for every shape two of the three colors, right? For one image it would be the teal and the fuchsia. For one it would be the orange and the teal. Then I realized I could have a total 3x3 grid where, almost like Sudoku style, every shape appeared once in every row and once in every column. Every shape was executed once in every possible combination of two of the three colors, of which there were three or six possible combinations. I actually forget. But the point was that every color combination would appear again once in every row and every column. So you had this kind of perfect matrix, really, where every combination of color and form was expressed once and every column and row had no repetitions of that expression. And I just found this to be so pleasant, just as an abstract aesthetic to contemplate: being able to sort of completely cover all of the ground of combinations in a single tight composition. And so I went and I sort of executed it one day on the wall of my rooftop because I had a shared rooftop with some of my friends. I lived with my roommates. It was three guys with a sort of shared rooftop space. It was very fun. And I executed the mural and it was exactly how I planned it out, where I thought, "Okay let's plan out where every image goes and what every color combination is going to look like." And then just a pretty quick tight execution: you put the stencil up. You try to spray such that they don't get so much on the wall around it so that the line and colors look tight. You just kind of try not to make it too messy and you just put the mural up. And the kind of name "identity matrix" came at the end because I had studied linear algebra in graduate school and before, and an identity matrix is a linear algebra concept. It's a certain kind of matrix, which is a grid of numbers that, when you multiply another matrix by it, you end up with the matrix that you started with.

It's a mathematical linear algebra concept. It's very, very bread and butter but I thought it was just a pleasant name, just to lift a kind of bit of linear algebra branding to this work. Given that the images themselves are ostensibly three views of a person (portrait, profile, and at a distance), the fact that this work itself was a matrix about a person, I thought the name "Identity Matrix" was very cute. So that was basically the story of that work.

## Codex

The word you were reaching for is *pareidolia*. I’d keep your own account of that moment, though. You looked down at a page of “chicken scratch” and saw a nose and a mouth. Once you pointed out the person who might be holding balloons, the three stars in the photograph became legible to me in a different way. That’s something only you could have told me.

I hear two connections with *Infinite Knot*. One is social. In both Berkeley and Yaffo, people around you made art on the surfaces they shared, and you wanted to take part. The other is the pleasure of working out a pattern, though that pleasure came at different moments. With the knot, you already loved the form, and painting it became meditative. With *Identity Matrix*, you discovered the figures by doodling, then devised a rule for arranging them. **“Completely cover all of the ground of combinations in a single tight composition”** says precisely what pleased you about the finished grid. The title came afterward as a joke that could hold both the mathematics and the person. I’d keep that playfulness in the telling.

**How did *Ronin’s Pact* begin?** I’m curious what the occasion called for and which part first caught your imagination. In particular, where did the idea of a sword rack that fills as someone plays come from?

## Daniel Kronovet

Yeah Ronin’s Pact was a cool project: really, really a sketch, more so kind of a proof of concept of some ideas than something that was meant to be a complete work in and of itself. For context by this time I had been really accumulating a lot of influences and interests. For example I had been very inspired by Pokemon Go and the idea of digital technology creating a sort of enchanted augmented reality above and beyond what the world itself could offer. Things like the JeJune Institute in San Francisco were an influence on me. The idea of this sort of scavenger hunt, a city-wide adventure you could go on, I thought was very cool and exciting. And because I had been involved at that time in Web3 and in digital governance design, thinking about how you could make a scavenger hunt that didn't require a huge amount of staff or operational complexity (but could basically just be kind of self-run or self-governed) was very interesting to me. So for instance, I spent a long time thinking about if you could make a puzzle where scanning a QR code somehow gave a reliable proof that you had solved a puzzle, but was resistant to people just posting the QR code online on the internet. So I spent a long time noodling over these problems without really getting anywhere or doing anything about it. I also had this idea that if someone finished the scavenger hunt, then they would earn a badge, a medallion, the New York Explorers Club was an inspiration to me there. The idea that if you finished a real-world adventure, you could earn the right to access this very cool member space. And I had this idea of, in different cities there would be these different cool bars that had different themes. I remember the one I would do would be Andromeda, which would be classical Hellenistic Greek theme. There'd be one that was like this and one that was like that. And the idea of finishing the adventure, which would have been a very challenging, hard thing to do, would have really meant something. And you would have really felt like your fellow adventurers in this physical location was the place you wanted to be. And so the idea of going on adventures with your friends, solving puzzles, experiencing your city in a more enchanted, magical way that then gave you actual access via this NFT medallion badge in a totally self-administered way to this space that you could then continue to go to again and again and meet people was very exciting to me. So that's kind of the background, and I was working at Cartridge, which was a company that made infrastructure for Web3 fully on-chain games. And people I was So anyway, I'm working at Cartridge and I am helping organize their hackathons. And so I'm thinking about ways to get the community engaged and kind of be in this mix of digital artists, on-chain video game makers who are exploring all these concepts of games and tokens. And all of those thingsworking with there were really exploring the idea of the video game, a video game session as a token. The idea that a session of a game itself was an NFT and you could use these tokens and you could transfer them and that this was a new kind of protocol for creating interactive game experiences. I know that the Loot NFT project was very inspiring to this group at the time. I had also been kind of inspired by Art Blocks and Eric Calderón and Tyler Hobbs and their writing about generative arts. And the idea of a person being able to form a unique relationship with a digital collectible was interesting to me. The idea of the scavenger hunt being a type of proof of work almost, of a sort of achievement, was sort of interesting to me. So anyway, I'm working at Cartridge and I am helping organize their hackathons. And so I'm thinking about ways to get the community engaged and kind of be in this mix of digital artists, on-chain video game makers who are exploring all these concepts of games and tokens. And all of those things. And so I'm helping organize this hackathon, and I thought, our framework that the hackathon was based on was called Dojo. So I already had a kind of Japanese samurai theme just based on the company branding. That wasn't really my choice. And I thought, okay, I think it would be interesting to do an activation where we developed this fully on-chain SVG dynamic NFT. That was the key, that anyone could mint one of their tokens, and that token would be their personal badge or medallion. And it would also kind of be the "save file" of their adventure. And as they did these sort of simple activities, the token itself would dynamically change as they unlocked different swords, and they could sort of, through "gameplay", or I could say even an augmented reality gameplay based on what the tasks were, they could then sort of craft and develop their own badge which reflected a certain level of achievement and attainment. In the context of the hackathon, if they finished the Ronin's Pack, they could get some benefit. Or maybe there was a Discord role they could earn if they finished the badge. There are a lot of ways to integrate this token into other experiences, which I think is kind of the exciting thing about the NFT save file concept is that it really becomes an interface that can connect to other experiences just the way that the Loot  project was the basis for other digital experiences. So I think once we're there, it just became, well, what can I implement in a probably in a week or 2 of a period that is gonna make sense in the context of this sort of activation that lets me kick the tires on some of these ideas. So in some ways it was really cool because I had brought all these ideas and now I was in a position where just through my normal day job I could be paid to explore these ideas as the part of my professional activity. I thought that was a very nice opportunity. And so yeah, that's basically it. I worked with my teammate, our designer, to develop the visual assets. And I coded up the Cairo NFT contract myself and the client myself. And it was a big success. People really enjoyed it. I think there's a screenshot, I'll find it, of one person in the Discord saying if they could go up to some shrine in Kyoto to finish the transaction to mint the Pact, which I thought was very cute. And I thought it was really exactly what I was going for. The idea that this digital layer is augmenting or adding something onto the physical world that we're already living in. So yeah, that was basically that project

## Codex

I’d describe *Ronin’s Pact* as a sketch, as you do. The larger idea had been with you for years. Pokémon Go and the Jejune Institute made you imagine an ordinary city becoming a place for adventure. The Explorers Club helped you imagine what came afterward. You could walk into a room where everyone had earned their way there, and you’d already have something to talk about.

The hackathon gave you a way to try one part of that idea. Dojo supplied the samurai setting. You and your designer teammate developed the visual assets, and you wrote the contract and client. Your choice was to make the badge itself the “save file.” Someone could look at the sword rack and see what they’d done, and another experience could recognize that same badge. The player asking about minting at a Kyoto shrine is a detail I’d keep. They were already imagining *where* the act should happen. That gives me a much clearer sense of what you mean by enchantment.

I also hear a connection to the murals. At Casa Zimbabwe and on the Yaffo rooftop, making something was a way for you to participate in a community. With *Ronin’s Pact*, you were making something through which **other people** could participate. That feels worth following alongside your interest in rules and patterns.

**What did you most want to try in *The Lost Temple Adventure* that you’d only been able to sketch in *Ronin’s Pact*?** I’d also love to hear about one moment at Devconnect that stays with you. What did someone actually do when the adventure put a puzzle in front of them?

## Daniel Kronovet

Yeah, so Lost Temple Adventure was basically just the same idea pushed further. I was still working at Cartridge. This was maybe a month or 2 after Ronin's Pact, and we had been asked to contribute something to DevConnect, which is the Ethereum conference. It was really my idea, we were planning on going to DevConnect and I thought, hey, why don't we pitch this idea of a scavenger hunt?I had actually done a couple of these scavenger hunts with some of my other friends in the Ethereum ecosystem. Some of my teammates at Colony, my first job in crypto, we really enjoyed each other. It was a wonderful team. And a lot of us were very into fun digital puzzles. And so they developed a whole kind of group that did these elaborate scavenger hunts at crypto conferences. Remember, it was Griffin and Aaron and their friends. It was a wonderful group. So we had done a couple of these over the years at various conferences. And I reached out to them to see if they were going to be coming to DevConnect, and they said, no, we're probably not going to do anything this year. And then I said, would you mind if I pitch something as part of my job at Cartridge to come do the scavenger hunt at DevConnect? And they said, sure, go for it. So I reached out to one of the Ethereum organizers and said, hey, I have done a lot of work with this group, Daedalus Industries, Social Distortion Protocol. We love the scavenger hunts. I would do one through Cartridge at DevConnect. And they were really open to the idea, and so they said, we want to do the treasure hunt is like their brand, so we'll do a different thing. We'll call it the adventure. And I said, fine, that sounds great. And yeah, so basically, here again, I found a way to explore this idea of the augmented reality scavenger hunt in the context of this crypto conference. And so where Ronin's Pact was very like single-player, no real physical components at all, with the Lost Temple Adventure, I was able to really start to integrate physical puzzles into this sort of digital game where the save file, the collectible adventure map, was now just an intimate part of the experience. And the kind of core idea, or one of the core ideas, is are you able to set up or create an experience where the player feels like they are accruing emotional value to a digital collectible as a side effect of their gameplay, right? And this is the save file as art object idea. It's almost proof-of-work inspired, people are spending hours, sometimes dozens, or 100 or more hours in these digital worlds. Where does that energy go, right? It goes into the save file, a piece of data that we treat so casually that really is the only mark, the record in the physical world of that experience. And so really elevating that and centering that as part of the game, I thought was just so cool. And so I kind of thought this is a new adventure hunt. The idea of the adventure map as the NFT, I thought that makes tons of sense. The idea of having the map route itself be procedurally generated per account, I thought was a clever little way to just push the idea of sort of customization. This was the Eric Calderón 1 of 1 of X idea. Every map should feel like someone's personal adventure. And then I think doing that in a way that was on-chain feasible was an interesting engineering exercise similar to Identity Matrix was how do you get the implementation to be efficient and to be complete while still providing necessary variety? This was the generative art on-chain conversation that I was sort of trying to enter into. And then thinking, how do I make this a fun game, right? The lost temple, the idea of, what is the storytelling here that actually gives these digital, this digital apparatus some emotional valence, right? What's the story that people are telling here? And so the idea of a lost temple, I thought was just, again, going back to we're just getting our reps in, was just such a standard classic pulpy narrative frame. And I thought, okay, there's enough going on here. Let's just stick to the basics. And that's something that I thought was kind of funny, was that there's not really story as much as the gesture towards a story. There's a lost temple that's evocative. There's really we have to go find it. There's nothing really there if you look at it closely, but there's enough of it there to provide a sense of emotional orientation to the player. And then because I was working through Cartridge and this was a company activation, I thought, okay, well, what's the kind of business strategy here, right? So it's, we have a gaming-focused web wallet, the Controller, that we want to kind of elevate. Our people in our ecosystem are developing this idea of the game as a save file and the idea of the embeddable game standard. So let's try to use this sort of ecosystem tooling and standardization and try to really lean into and support that. We wanted players to be playing games in our ecosystem as well. So people playing the game, so, this becomes I can sell this to the teammates as this is going to benefit the business and the brand because people are going to be coming into the StarkNet gaming ecosystem and playing our games. And at the same time, people are now going around the venue doing puzzles. And I got to reach out to different organizers and get their permission to set up the physical puzzles, which, going back to operational complexity, was not the most complicated, but required a small amount of maintenance on my part. I think running the game at the festival definitely took half my time, which was fine. The Super Nintendo ended up getting stolen, which is too bad, but that was my own fault. But yeah, so it ended up being 6 stages, 3 puzzles that were on-chain. So you just had to go on your phone and play a round of an on-chain game and win, right? So that was go play an on-chain game. And then the other 3 puzzles were physical puzzles where you had to go find, there was a clue as to the location. You would have to go around the venue trying to find the actual puzzle. And then you would have to do the puzzle, which, there was a kind of a in the app, you would enter a code word. That was the idea, was that every puzzle resulted in you discovering a code word that you would enter into the app to unlock the next stage. And overall, it was pretty successful. People enjoyed it. I think to my discredit, the puzzle designs were generally too difficult because, as I've learned time and again, it's very easy to design a puzzle that we think is simple because we know what we're thinking. But someone else will come into it thinking something completely different. And so even a puzzle that you think is very simple is generally, unless you've done playtesting, extremely difficult. So the first puzzle, which was the '90s living room, the idea was that I had an original Super Nintendo with some games and some back issues of Nintendo Power. And I'd fantasized about finding an old TV in Buenos Aires and setting up an actual working Super Nintendo. That didn't happen. So it just was the Super Nintendo as a sculptural object. Plus the magazines as almost an aesthetic, and the clue for the puzzle was find the secret, crack the code, and the actual games in the Nintendo were Konami games, and so the answer was Konami and the Konami code, and I thought that people would just see the Super Nintendo and Nintendo Power, and know that the puzzle was called Cracking the Code and see that the games were Konami games, and they would just immediately understand that the solution to the puzzle was Konami, the Konami code, right? That was what I thought, very Ready Player One. In practice, no one had any idea what I was talking about. Not a single person got the clue unless I helped them, and so that was silly

One idea that a friend had given me was to add a Telegram help link to the actual game client so people could basically get support if they were stuck. And that saved the whole game because I was able to just give people clues when they got stuck and people could continue playing the adventure. If that hadn't been in place, no one would have finished the game. I think at the end we had probably, we had 100 people start the game. I had made little QR code flyers, can you find the lost temple? And I put them up all over the venue with permission from the organizers. And so we had 100 people mint a map and start the game. And then there was a pretty predictable drop-off. I think maybe 20 people finished one puzzle, so on and so forth. I think there were maybe 4 or 5 people that finished the whole adventure. But people really liked it. People who got into it really enjoyed it, and they were very grateful that I had set it up, and they really had a good time. And I have photos of people, I'll share it, people just doing the puzzles together and having a good time. And it was really a very successful activation. And I thought really let me push these ideas that I'd been having for so long much further and just kind of get another rep in trying to integrate these ideas and really turn them into something that people can actually experience and emotionally relate to. Yeah, so that was that project

## Codex

“Where does that energy go?” is a question I’d hold on to for the portfolio. It gives *the save file as art object* a motivation anyone who has spent hours playing a game can understand. In *The Lost Temple Adventure*, the route was personal from the moment someone minted their map. You were curious whether it would come to matter to them because of what they did afterward. Someone who kept their map might remember who stood beside them puzzling over those issues of *Nintendo Power*.

I’d keep the story of the Telegram link, too. You could look at the Super Nintendo, the cartridges, and the magazines and see *Konami* almost immediately. To a player, those same objects held any number of possible clues. You’d spent years thinking about how a hunt could run itself, and when you finally staged one, part of your role was being the person on the other end of the line. That detail tells me something about making the work that I couldn’t learn by looking at a finished map.

**How did *Space Prince* begin?** I’m especially curious about the birth chart. Where did your interest in astrology come from, and do you remember the moment when a chart first struck you as something a person could *play*?

## Daniel Kronovet

Yeah, so Space Prince came kind of out of nowhere. This was a few months after the Lost Temple Adventure. And I had been really immersed in the StarkNet gaming community, and in particular had been quite influenced by this game Loot Survivor 2 that Provable Games had made, which I thought was just phenomenal. was a fully on-chain roguelike where you fought monsters and you were an adventurer and you had to level up your stats and fight monsters. And it was very difficult. And I thought that they had done, the game designers had done such a great job of creating a fairly rich roguelike game inside of a highly constrained blockchain computing environment. And so they had used very simple rock-paper-scissors mechanics and different types of gear and monsters and weapons to create a fairly compelling game with very simple building blocks. The idea of rock-paper-scissors being a workhorse of on-chain gaming and that the classic, people still play it, even though it's so mechanistically simple, there's enough depth to make it a cool game. And so I think this idea of on-chain gaming returning so much to mechanistic fundamentals to make the games feasible, I thought was so interesting. And something else that Loot Survivor did, which I thought was very cool, was to have an NFT collection. They call it the Beast Collection of all these monsters that were just normal NFTs that had stats. But their idea was that the beasts would live inside of the game. And so you would pay 50 cents, a dollar, insert coin to play a run of this roguelike game, which again is a very classic arcade model. But then if in the dungeon you actually met and defeated a powerful beast, then you would collect that token. So the idea that you were going into this digital dungeon to search for "real" treasure in the form of these scarce digital collectibles, I thought was just so interesting. And again, Loot Survivor, these people were inspired by the Loot project, which was again one of the big influences at the time, along with sort of the generative art sort of conversation, which I would say was happening in parallel. Yeah, and so that was kind of happening. And then I was at an art event. I was at an opening at Nguyen Hoa Het Gallery in the Lower East Side in January of '26. And I ran into Haver, who's the director of Artist Commons and is such a wonderful person who I've gotten to know through digital art events in New York City and who I think is a very we have a friendly rapport. And we were chatting and he said, I'm starting this program and, it starts next week. This is a Friday. He's like, it starts on Monday and we have a couple extra seats. Is this something that you'd be interested in? And I thought, well, yes, that is something that I would be interested in. I think that I, I'm already sort of exploring in this direction through work. And, I feel like I have capacity this year to take on a creative project and I want to grow creatively and artistically. And he said, well, what would you do? And I thought, what would I do? What would be a cool project? And kind of the idea for astrology as the mechanics just kind of came out of nowhere, just fully formed from the head of Zeus. I was familiar with astrology and appreciated it as a symbolic system, and so had this idea for the birth chart would be the save file that would be the character sheet -- kind of the Erik Calderon "one of one of X" idea agaub -- and that would be the core concept, and that you would develop the gameplay using these kind of workhorse rock-paper-scissors type whatever mechanics from that, and you just let the gameplay emerge, what was ultimately out of a series of constraints. That was kind of the project, and I had no idea where it was going to go or what the game would look like. But that was the core idea of the birth chart as the character sheet, a roguelike with some simple on-chain mechanics. And I spent the whole next day, Saturday, just riffing with ChatGPT on this concept and developing ideas and thoughts and how it might look and this and that. And I have that chat actually, which I can export and make available as a resource. I don't want to put it in the context now because I think it would be a distraction, but I have it as a chat, which I think would be fun to reference. I'll just paste my initial prompt so you can see where that conversation started:

> Space Prince is an onchain TCG in which players mint characters based on astrological charts. Each character is a unique lat / long / timestamp corresponding to an actual birth location. An onchain calculation of the astrological chart becomes the character stats, with 12 astrological signs and 4 elements driving the stats. Combat is a rock-paper-scissors or five-element cycle among the various signs. Combat details and progression are TBD but will likely involve roguelike battling and metaprogression. One very nice implication of this design is that people can play as themselves, as famous historical figures, etc.

So that was kind of the start. I've been working on it now for 10 and a half months. It's mid-November. And so it's come a long way. I don't think the game is done yet. I think it's a work in progress. Yeah, I think I can pause now and we can decide how to continue the conversation. But that's how the story started. That was the idea of the game. idea that through playing a game that was well-designed, that worked as a game, people could have this experience of and understand this more abstract kind of symbolic system of astrology, which I have a lot of respect for. So in addition to every other goal of the project, it would be for it to become almost a teaching tool. And with enough of an isomorphism between mechanics and astrology source content, that you really do learn astrology through playing the game.

## Codex

I think *Space Prince* gives us a way to look back across all five works. At Berkeley, you loved the endless knot on sight and learned its construction by drawing it. In *Space Prince*, you want someone to come to understand a birth chart by playing it. **What can someone come to understand about a pattern by doing something with it?** That feels like one question worth testing against your practice.

Each work gives it a slightly different meaning.

- **Infinite Knot.** The form came from Tibetan Buddhist imagery, the method from architectural drafting, and the occasion from co-op mural culture. You knew what the finished knot would look like. What you discovered by painting it was how meditative it felt to make.
- **Identity Matrix.** The figures came first, by chance, while you were doodling. The pleasure of the grid was your discovery that nine positions were enough to exhaust the combinations you’d chosen. The title came last, when linear algebra supplied a joke about three views of a person.
- **Ronin’s Pact.** Pokémon Go, the Jejune Institute, and the Explorers Club fed a desire to make ordinary places feel charged with adventure. The hackathon gave you a small part of that ambition to try. The person who wanted to mint at a Kyoto shrine supplied a piece of the experience you hadn’t designed.
- **The Lost Temple Adventure.** Here you could ask, in your words, **“Where does that energy go?”** Calderón’s generative art helped you imagine a map unique to each player. The conference hunts you’d done with friends gave you a reason for someone to care about *their* map once the day was over.
- **Space Prince.** *Loot Survivor 2* showed you how much play a few well-chosen mechanics could sustain. Astrology gave you a symbolic system you respected enough to want the mechanics to answer to it. That adds a new ambition for the work. Someone might leave the game able to see something in a chart that they couldn’t see before.

I hear two motivations so far. One is the satisfaction you take in a construction that fits together completely. The other is your interest in how an image, object, or place acquires personal significance through the time someone spends with it. Different works give those motivations different weight.

**I’d continue with one question about the person encountering the work.** Imagine a friend seeing *Identity Matrix* on the rooftop. They recognize the little person with balloons and love it, but never notice that the grid exhausts the combinations. Would that feel complete to you? I ask because you’ve described a particular hope for the *Space Prince* player. I’m curious whether helping someone discover the underlying system has always mattered to you, or whether that desire developed as you began making games.

## Daniel Kronovet

That's a great question. I would say that it's not essential to me that the viewer appreciate the intricate construction of the work for it to be good. I think that actually I would be very happy if the viewer just thought that it was pretty and pleasant and they just wanted to spend time with the work and that it made them feel calm. I think that appreciating the construction is something that I would want an art critic or someone who is looking at the work with a critical eye to be able to appreciate as part of the artistry and the craft of the work. But that's not what I think I need every viewer to be noticing right away. I think that if they want or if they're able to discover the intricacies of the construction. I think that's very pleasant, but I don't think that that is the primary goal I have for just a general viewer. But it is something that I would want an art critic to appreciate.

## Codex

That changes how I’d read *Identity Matrix*. You took pleasure in fitting every combination into nine places. Someone on the rooftop could take pleasure in the balance of the colors, notice the little figure with balloons, and stay a while. For you, that would be a complete encounter with the work. A critic looking longer could point to a choice with a visible consequence: each color pairing appears once in every row and column, so the colors feel evenly distributed even to someone who never counts them.

I’d treat learning astrology through play as an ambition specific to *Space Prince*. Across the five works, the more consistent interest may be in **how carefully chosen rules shape what an experience feels like**, whether anyone notices the rules or not.

I’d turn next to the other part of your statement, about how things acquire value. When you described the hours people pour into a game, you asked, “Where does that energy go?” **Is there a particular save file, game character, or object from your own life that you’ve felt that way about?** I’m curious what you remember when you look at it, or what you’d miss if it were gone.

## Daniel Kronovet

Yeah, that idea came out of the interaction of other ideas that I was being exposed to. I think specifically the crypto idea of proof of work and how you can really express or capture effort in a kind of digital artifact, I thought was very interesting. I thought that the idea of digital and generative artworks that I was seeing in the Web3 NFT art blocks digital art community was very interesting. I remember Matt Desilets' Meridians was very inspiring to me, just appreciating how beautiful the images could come out of such a relatively small piece of code. So the idea of creating images on-chain as these sort of provenanced artworks was really interesting to me. And the idea of just a video game save file as a place where value goes was also interesting to me. There's not a specific game that of which the save file is so relevant. I mean, I think I've played many games and have had many save files, and I never really thought about them in that way until I started thinking about these other things. And then they all just sort of, the ideas just started to interlock in my mind in a way that led to this pretty, I don't wanna say inevitable, but that led to this kind of clear idea. You know, I do have a, there's a story. A friend of mine, Ben, was playing Baldur's Gate 3, and he is a huge gamer, and he'd been, you know, put maybe 80 hours into it. And we were chatting, and he said a joke about how, you know, there had been some system update that had corrupted the save file, and he had to start over. And I remember he just was so, well, he was, you know, he wasn't distraught, but he was definitely annoyed about it. And I just thought that was so funny. I thought, huh, you know, that seems wrong. I mean, the fact that a system update could just glitch your save file seems like pretty not okay. But yeah, I think that those 3 ideas together, the idea of there being a digital trace of actual investment and effort, the idea of a digital artifact having an aesthetic quality as an artwork, digital artworks, and the idea of gameplay as being that kind of proof of work that instead of resulting in a blockchain hash results in some data in a save file that could then attain a visual quality that the player then feels connected to emotionally. Those ideas just kind of came together in that way.

## Codex

I’ll check the Art Blocks reference so we have the artist’s name and the title right as we talk about its influence.

## Codex

Ben’s story gives “Where does that energy go?” a concrete setting. He still remembered playing *Baldur’s Gate 3*, but after the update he could no longer return to the world as he’d left it. That’s one way to feel what a save file holds.

I hear three ideas coming together for you. Proof of work suggested that effort could leave a verifiable trace. Matt DesLauriers’s *Meridian* showed you how much beauty a small program could produce. A save file already held the consequences of someone’s play. Your idea was to let those consequences shape an image that the player could grow attached to. [Matt DesLauriers on *Meridian*](https://meridian.mattdesl.com/)

That gives me a way to connect *Identity Matrix* to the games. On the rooftop, you worked out the combinations yourself and painted the whole set. In the games, you still design the rules for making the image, but some of the decisions about what it will look like happen in someone else’s hands.

**When a run in *Space Prince* ends and a star appears in the prince’s sky, what would you want the player to remember when they look at that particular star a month later?** I’m curious how you decide which parts of an experience deserve a visible trace.

## Daniel Kronovet

I think that my highest aspiration would be for them to feel like the time they spent with the game was meaningful and meant something. that it wasn't time wasted, but that they had actually grown through the experience, and the star was an objective reflection of that growth. Something they could point to and point others to and say, this is shows who I am.

## Codex

“This shows who I am” feels like a phrase to keep. You started with “Where does that energy go?”, which is a question about what a game can preserve. Now you’re asking what someone might recognize of themselves in what they’ve kept.

I hear two things in “an objective reflection of that growth.” The star can record something that happened in play. The player can point to it later and say why that experience mattered to them. That also gives the image a social purpose. Much as you imagined two people at the Explorers Club having a story to tell each other, you’re imagining someone showing their sky to another person and having a place to begin.

**What does growth mean to you here?** Imagine a player telling a friend, “Earlier, I would have played that encounter differently.” What do you hope they’ve learned to notice or do, and what part of that change would you want the star to show?

## Daniel Kronovet

One of the big influences I've taken for thinking about the gameplay of Space Prince is the novel Siddhartha by Hermann Hesse. In Siddhartha, you have the main character who begins life as this sort of prince who leaves behind the privileged world he knew to go on a journey of enlightenment where he first goes and becomes an ascetic monk, and then he goes and becomes a worldly man in the city, then he goes and lives by a river as a boatman. And all these experiences ultimately none of them are the enlightenment that he seeks. He's always looking for enlightenment and he never quite finds it, but through this journey of development and experience, he comes to attain an enlightened state. Think about my own life and my own development, and how do I try to respond to situations with more skill and grace? How do I, the joke, how do I respond, not react? How do I try to attune to my impact on others? How do I navigate the world in a more skillful way? My ambition for the game, which I think has not yet been achieved, is that gameplay feels a lot like that. You get a high score, you generate light, enlightenment, light, which is the game's kind of score, by responding to these situations with skill and grace and attunement. And so someone would point to a star and think, yeah, I really navigated this situation well.

## Codex

“Respond, not react” gives *Space Prince* a clearer purpose for me. When you say you want a star to show who someone is, I now hear something quite specific. You’d like the player to look at it and remember a moment when they paid attention, considered the effect they might have, and chose their response well. Light is how you hope to give that moment a visible form.

What you’ve drawn from *Siddhartha* is an idea about how someone learns. The time by the river means something to Siddhartha because of the lives he’s already tried to lead. That adds something to your idea of learning astrology through play. A player might learn to read a chart and still have to exercise judgment about what to do when that chart meets another. You’ve described that as an ambition you’re still working toward, and I’d keep it in those terms when you talk about the piece.

I’d bring this back to *Infinite Knot* for a moment. When you described painting it, you said that once the drawing was in place, following the form became meditative. With *Space Prince*, you’re trying to make something in which another person can practice a kind of attention that matters in your own life. **Does the attention you remember giving the knot feel related to the attention you hope a player brings to an encounter?** I’m curious how those two experiences feel to you from the inside.

## Daniel Kronovet

That's an interesting thought, and I would say that there's probably some truth to that, even though that's not something that I was thinking about explicitly. I think creating a calm and meditative state in someone, for me making the knots, for a player sort of playing the game and thinking about how they respond to their situations. I think that, I think for someone to attain a meditative and attentive state would be a goal. And I think, yeah, I think that that is a line that you could draw.

## Codex

I’d keep that as a connection you recognize in hindsight. When you painted *Infinite Knot*, what you knew was that you loved the form, wanted to contribute something to the house, and found the painting meditative. Years later, in *Space Prince*, you’re deliberately trying to give a player room to pause and respond with care. Knowing how it felt to paint the knot helps me understand why that ambition matters to you now.

I think the five works can tell a coherent story through connections like that. *Infinite Knot* and *Identity Matrix* both grew out of wanting to add something beautiful to a place you shared. *Identity Matrix* and *The Lost Temple Adventure* share your pleasure in how much variety a few rules can produce. *Ronin’s Pact* gave you a first chance to make a badge someone could shape through play. *Lost Temple* took that idea into a physical gathering, and *Space Prince* asks whether such an object could hold something as personal as a moment of good judgment. Each connection can be specific to the works it joins.

One motivation I’d like to hear more about is **making something for people who are already around you**. I keep picturing the stairwell at Casa Zimbabwe and, years later, those little “Can you find the lost temple?” flyers around Devconnect. What appeals to you about putting something in a place people already inhabit and letting them come across it in the course of their day?

## Daniel Kronovet

Before we continue, let's pause and think about what we want to do next. I think that we have some nice context about the works that I do kind of want to capture in our documentation that we can use as part of every work's page. I think that taking some of these responses and using them as the basis of kind of a story of each work on that work's page, I think would add a lot to the portfolio. And we can discuss how to proceed with more of the artist statement through line and what we want to do there. I feel like we have some good stuff already and I don't want it to get lost.

## Codex

I’ll pause the interview and save the material while it’s fresh. I’ll give each work a Markdown story based on your account, link it from the inventory, and keep the possible connections between works in working notes. Your artist statement can stay in your own words.

## Codex

I saved a first-person story draft for each of the five works. Each title in the [works inventory](/Users/kronosapiens/code/personal/kronosapiens.art/materials/works.md) now opens its draft. They’re edited from your spoken accounts, with room for details like choosing the out-of-the-way stairwell at Casa Zimbabwe, seeing a person holding balloons in your doodles, and giving hints over Telegram at Devconnect.

I also saved [notes for the artist statement discussion](/Users/kronosapiens/code/personal/kronosapiens.art/materials/practice-notes.md). They collect the influences, phrases, and connections we’ve discussed, including which connections you recognized in hindsight. The [artist statement](/Users/kronosapiens/code/personal/kronosapiens.art/materials/statement.md) is still your original text. The new work is uncommitted.

I’d pause the interview here. When we return, I’d start by reading one story together for voice. *Identity Matrix* is a good candidate because the pleasure you took in discovering the faces, arranging the colors, and naming the piece all comes through in how you told it. Once the story sounds like you, we’ll have a better ear for which phrases belong in the individual pages and which you might want to carry into the statement.

## Daniel Kronovet

great, let's commit and push these changes

## Codex

I’ll check the branch and pending files, then commit the portfolio stories and notes and push them to the configured remote.

## Codex

Committed the five work stories, updated inventory, and artist statement notes in [7a7bd23](https://github.com/kronosapiens/kronosapiens.art/commit/7a7bd23baa1a4f138369bb317cbaa5d7aabcc173).

Pushed both portfolio commits to `origin/main` and verified the working tree is clean.

## Daniel Kronovet

Great. What should we do next? Continue the interview?

## Codex

Yes. I’d continue the interview, with a narrower aim now. We have a story for each work. What would help with the artist statement is hearing you compare a few of the choices you made across them.

I’d pick up where we paused, with the places people encounter your work. At Casa Zimbabwe, a housemate might pass your knot on the stairs every day. At Devconnect, someone who came for the conference might spot a flyer and spend the afternoon on an adventure. In both cases, the person was already there for reasons of their own.

**What appeals to you about making something that someone can stumble across?** I’m especially curious whether you picture a particular person or moment when you decide, *this belongs here*.

## Daniel Kronovet

That's an interesting question. I would say it links to the idea of the augmented reality game and of enchanting the environment with magic. So things that you discover along your way that are the portals to a larger adventure, I think, is a core part of the worldbuilding or aesthetic I'm going for. Maybe another way to put it is if anywhere you go there might be something you can stumble across, then everywhere you go the entire world becomes a site of potential adventure. Even where the game is not actually present.

## Codex

I’d keep your phrase **“even where the game is not actually present.”** It gets at what you mean by enchantment. At Devconnect, you could place a clue in one corner of the venue. What you hoped might happen was that someone would turn the *next* corner a little more curious about what they might find. The game could change how a place felt beyond anything you’d put there.

That gives me a different way to understand your interest in attention. With the knot, there’s pleasure in staying with something you’ve already noticed. With the hunt, there’s pleasure in walking through a familiar place with the feeling that there’s still something to notice.

**Can you remember being on the receiving end of that feeling?** I’d love to hear about one time you were going about your day, stumbled onto something, and afterward found yourself looking at the place differently.

## Daniel Kronovet

When I was an undergraduate, one Halloween, some of my housemates and I went to San Francisco for an elaborate Halloween game, public game, that some organizers had put together. It was a Halloween-themed zombie game where at the start everyone was a human and there were some zombies, and you had to go from the ferry terminal all the way to the Civic Center on foot or public transit. But the point is you were in public space, and over time zombies would try to catch the humans and turn them into zombies. And so as the game progressed, more and more people were zombies and fewer and fewer people were humans. And once you were a zombie, the fun of the game was to try to catch humans. While you were a human, the fun of the game was evading the zombies. And the game naturally got harder and harder as the night progressed. And I remember going with 2 of my friends and we just were walking through the streets hyper-alert, back-to-back running, fleeing from the zombies. The exhilaration that I felt was almost nothing else I've ever experienced. And I just remembered how that felt.

## Codex

The detail I’d keep is the three of you moving back-to-back. You’d walked those streets with friends before, but that night you needed one another’s eyes. The organizers could explain the rules in a few sentences. What you remember years later is how it felt to move through San Francisco together.

That broadens what you’ve been saying about attention. Painting the knot was calming. Looking out for zombies was exhilarating. In both memories you can recall exactly how you were attending to the place and what you were doing with your body. That seems closer to what you mean by enchantment than the presence of a fantasy theme alone.

**How much of that exhilaration came from playing on streets that were still going about their ordinary business?** I’m wondering what would have felt different if the organizers had given you the same rules in a space set aside entirely for the game.

## Daniel Kronovet

I think that being able to play the game in the context of a real city added a lot. On a game course, every detail would have been added by the organizers, and so it would have been more flat and sparse. Whereas in a city, you're actually in the city, so the entire city becomes a game board full of depth and nuance and complexity that no designer could create because it's an actual real place. Otherwise you're playing laser tag, which is fun, I think this is more interesting

## Codex

“Otherwise you’re playing laser tag” gets at something specific about your taste. The organizers gave you a reason to cross San Francisco and a reason to watch your back. The city supplied the rest. An intersection could matter because of who happened to be standing there when you arrived. I hear two sides to what you mean by enchantment. A game can change how you see a place, and the place can give the game things its designer could never have planned.

That makes me curious about *Space Prince*. You had the idea early on that someone could play as themselves or as a historical figure. The sky at a particular time and place supplies a set of relationships for you to design around, much as San Francisco gave the Halloween game its streets.

**Suppose two charts played equally well. One was invented for the game, and the other came from the sky at the moment you were born. What does knowing “this one is mine” bring to the experience for you?**

## Daniel Kronovet

I think the idea of "playing as yourself" in the context of an astrology game is very important to me. Because then it means that your learning of the game and your development of intuition for thinking about how to act is grounded directly in your actual astrology chart. So if ever you got your chart read, or looked into it in an astrology context, you would really understand more intuitively than maybe even if someone read your chart to you what those dynamics are expressing. So letting people experience their astrological chart via gameplay, I thought, added so much more to just having a flat chart being interpreted to you by an astrologer. And that gives the game a meaning outside of just the game because it really changes the way that you understand yourself. as just a generic chart, I think, would lose a lot of that impact.

## Codex

The birth chart and the star are personal in two different ways. The chart is yours before you make a single move. The star becomes yours through the choices you make during a run. What you hope someone carries out of *Space Prince* is the experience of having acted within a pattern they can return to later. At a chart reading, they might recognize a relationship between two planets and think, “I know what that felt like in play.”

That gives the comparison with San Francisco a second half. Someone brought an ordinary city street into the Halloween game simply by playing on it. Afterward, walking down that street could call up the memory of being there with friends. In *Space Prince*, you’d like a player to bring that kind of memory back to a chart they might otherwise have needed someone else to explain.

**Is there one relationship in your own chart that you’d especially like to make playable?** I’d be curious to hear what an astrologer might say about it, and what you’d let a player *do* that could help them arrive at an intuition for it themselves.

## Daniel Kronovet

I think a good basic goal is to give the player a feeling for all of their planets, kind of almost as "characters." You know, most people know about their sun sign and their moon sign and their rising, but I think people rarely think about the sun and moon part of that sentence. They just think of, I'm an Aquarius, or I'm a Scorpio. But your chart is about your planets. That's who you are. The signs are just the planets' positions. And so, I think really shifting the focus away from signs into planets as the bulk of who you are, I think, would be a good and I think attainable early learning goal beyond aspects and interactions and all those things. I think just having a player think, I have a Sun, I have a Moon, I have a Mars, that's what my chart is about. Not that I'm an Aquarius. I think that that would be a good first foundational goal

## Codex

I’d keep your sentence almost exactly as you said it: **“I have a Sun, I have a Moon, I have a Mars.”** That gives *Space Prince* a modest, recognizable first success. A player could leave their first session curious about one planet in their chart that they’d barely thought about before. The idea of planets as characters gives them a reason to come back and get to know another. The more intricate relationships can wait.

In *Identity Matrix*, you found three views of a person in your doodles, and the joke in the title came afterward. In *Space Prince*, the idea that a person has several characters available to them is there from the start. That makes me curious about the change in your own wording, from **“I am”** an Aquarius to **“I have”** a Sun, a Moon, a Mars.

**Is there something about that shift that matters to you personally, beyond helping someone learn astrology?**

## Daniel Kronovet

As I've gotten older, I think, and hopefully more mature, and I've kind of learned more about taking accountability for my actions and being aware of my impact on others, more so than maybe I did when I was younger, I think it's actually kind of nice to shift from, I am an Aquarius, I have this sort of positive mythic identity of this Aquarian creative that is just abstract in the world, to being, I actually am made of planets and drives, and some of them motivate me in this way and that way, and sometimes I act in a way that is beneficial to others, and sometimes that I act in a way that is destructive or careless. And maintaining awareness of that over some abstract ideal identity, I think, is actually a nice way to symbolize and reflect personal growth and self-understanding

## Codex

The part I’d keep is your phrase **“being aware of my impact on others.”** You’ve talked about wanting a player to learn something about themselves through their chart. Now there’s a reason that self-knowledge matters to you. If you can recognize several drives in yourself, you have a chance to notice which one you’re acting on and what that action might be like for the person on the receiving end. That gives “respond with skill and grace” a meaning grounded in your own life.

It also makes me hear your earlier hope for the stars a little differently. You imagined pointing to one and saying, “I really navigated this situation well.” **Could you also imagine valuing a star because you could say, “That’s where I realized I’d been careless”?** I’m curious whether that moment of recognition is part of what you mean by growth, too.

## Daniel Kronovet

I think certainly why not? I think that every run of the game puts a star in the sky, and the higher light, brighter star is a way to give people something to maybe strive for. But I think even a run that ended very poorly with a dim star is a memory of that experience

## Codex

The dim star gives me a different reading of your phrase “this shows who I am.” A bright star might be the run you’re proud to point out. The whole sky holds the runs you’re proud of alongside the ones you remember because they went badly. That helps me understand why *Siddhartha* matters to the project. An experience can stay with you and shape how you act later, even if, at the time, you handled it poorly.

I’d pause the *Space Prince* questions there and come back to the portfolio. We’ve talked through several connections that occurred to me as a viewer. I’d like to hear one you would choose as the artist.

**Imagine you’re showing someone *Space Prince*. They’ve just seen the sky at the end of a run, and you can show them one of your four other works next. Which would you pick, and what would you hope they’d notice by seeing the two together?**

## Daniel Kronovet

I think the other piece I would show is Identity Matrix. There's the same sort of curiosity about systemization and systemization of color and form and the emergent aesthetic beauty that can come out of that. I think that I tried to apply a lot of those same ideas to the visual design of Space Prince as well as to the mechanistic design. A lot of the same underlying interests are being re-expressed in this more complex form

## Codex

I’d try *Space Prince* and *Identity Matrix* side by side in the portfolio. On the rooftop, someone can see all nine stencils at once. They can enjoy the colors immediately and, if they linger, work out how the arrangement holds together. You’ve said you want that kind of pleasure to be available in *Space Prince*, too. The pairing gives someone a way into the game through the artwork, even if they’ve never played it.

We’ve talked a lot about how *Space Prince* plays. I’d like to hear more about how it looks. **If we were standing in front of a chart together, what would you point to first as an example of the same thinking that went into the mural?** I’m curious what rule you set yourself and what you found beautiful once you could see the result.

## Daniel Kronovet

One of the big tensions with the Space Prince visual and the design of the chart was wanting to balance ornate visual embellishments to give a feeling of refined, almost jewelry, with wanting it to be very functional as a game board and making sure that the information that you needed to play was always very legible. And so those 2 things pushed in opposite directions, and I think trying to work through those has led to the form of the chart as it is today, which I think is in pretty decent shape. I think that visually, and I think that orally, sound-wise, the game is actually going very well. It has come together at a level of quality that I would accept, modulo A few open questions around achievement design and so on

## Codex

“Almost jewelry” gives me a reason to linger over the chart. I can imagine wanting to look closely at it even after a run is over, which matters if it’s going to be an object someone keeps. During play, that same chart has to tell someone enough at a glance to make their next move. That adds something to the *Identity Matrix* pairing. On the rooftop, discovering the construction is optional. In *Space Prince*, part of the artistry is deciding what a player needs to see immediately and what they can discover slowly.

You also mentioned sound for the first time, and it’s one of the parts you feel has come together. **If you could sit me down with headphones for ten seconds of *Space Prince*, which moment would you choose?** What would I do, what would I hear, and what do you like about how that sound lands?

## Daniel Kronovet

I think that the main theme is just so good. I could talk more about the sound design of Space Prince, but, similar to the visuals, it revolved around creating a systemization out of musical fundamentals. Basically, most video game music is in a single key because you need to be able to sequence tracks arbitrarily. It's not like a normal symphony where you can just have multiple movements in different keys, because the songs have to be able to be dropped in randomly based on gameplay. But I still wanted every planet, almost like Gustav Holst, to have its own theme. And so the idea of planetary themes plus a main theme in D ultimately was the idea. Then we thought, what if every planet, instead of having a different key, had a different mode? And so we could have a cycle of 7 modes, 7 planets, and every planet would have a mode, and so it would have its own distinct sort of sound and feel while still being all in the key of D. And then I had Astra, actually your predecessor, develop a couple sketch tracks. And then we refined it a few times to generate the tracks that we have now, which were completely AI generated by Astra based on our sort of thinking and also looking at the planetary symbolism for every planet. So the kind of musical framework plus planetary symbolism. source themes that we'd already developed into a model to produce these just generated tracks with some refinement. And certain of the tones that the model had chosen sounded horrible to the human ear. And so changing some of the samples, but I think we really ended up getting somewhere quite good.

## Codex

I can see why you’d put *Identity Matrix* beside *Space Prince*. On the rooftop, three figures and three colors gave you a whole wall of variations. In the score, the main theme returns you to D, while seven modes give the seven planets distinct musical characters. The part I’d want to hear is how a particular planet’s symbolism found its way into the music. The seven-to-seven correspondence gave you a place to start, but it took listening to discover which sounds actually worked.

I’d keep the Astra collaboration in the work’s story, including the detail about changing samples. You can explain why you chose a mode for a planet, credit Astra with generating the tracks, and let someone hear a choice you made because the original sound grated on your ear. That would give a visitor a concrete sense of how you worked together.

For the portfolio page, I’d start with the main theme, since that’s what you’d most want someone to hear. **Which planetary theme would you play second, and what would you want me to listen for that makes it feel like *that planet* to you?**

## Daniel Kronovet

I think Mars would be an okay choice. I think they're all a pretty even quality. I think that Mars is just the most obviously aggressive, and so I think it would be the easiest for someone to just casually hear and be able to clock the style distinction. But I would really put all 7 on the site and just let people tab through them

## Codex

I’d give the main theme its own play button and put all seven planetary themes in tabs labeled by planet. Mars makes an easy comparison because its aggression is immediately recognizable. Letting someone move from Mars to Venus or Saturn gives them a chance to hear the subtler differences for themselves. That feels close to the pleasure of looking across the nine stencils in *Identity Matrix*.

There’s a question here I’d bring back to the whole portfolio. You chose teal, fuchsia, and orange from all the palettes that would have satisfied the mural’s rule. In the score, a sample could fit the mode perfectly and still sound awful to you. **What tells you that a choice is beautiful once you already know it works?** I’d be curious to hear that in your own words, because your taste seems as important to these pieces as the systems you devise.

## Daniel Kronovet

I mean, I think it kind of just bottoms out at the end of the day with my own aesthetic sense and sensory experience. Sometimes I feel like almost like a medieval astronomer. I'm using all of these systems and frameworks to try to navigate this huge creative space. And then at the end, you just have to use your eyes and your ears and your heart and just say, does this feel good? Does this feel familiar yet different? Do I feel like this is something that I can connect to because it's familiar but also is exciting because it's different? I think finding that edge, that creative edge, is its own kind of spiritual spaceship journey

## Codex

I’d circle **“familiar yet different.”** In *Identity Matrix*, a few marks on a page of chicken scratch suddenly looked like somebody holding balloons. In *Space Prince*, a sample could fit the planetary mode you’d chosen and still make you wince. Those are two moments when your eye or ear changed the course of a piece. They tell me something about you that I couldn’t learn from a diagram of either system.

The medieval astronomer is the image I’d remember from this conversation. It puts you in the picture. You’ve made instruments to help you find your way through a space too large to explore exhaustively, and you still have to look up and decide what catches your eye. Your phrase **“your eyes and your ears and your heart”** gets at the part of the work you reserve for yourself.

I think this is a good place to pause the interview. Your current statement names an interest in how beauty emerges from rules. You now have something more personal to draw on when you write it: **what makes you stop at one possibility among all the ones a rule permits.**

## Daniel Kronovet

Sounds good. How should we proceed? I'd be comfortable letting you draft a longer artist statement using this transcript as a baseline, as well as possibly save aspects of the conversation elsewhere as a resource to use for later writing

## Codex

I’ll draft a longer statement alongside your current one and add a few verbatim excerpts to the practice notes for later writing. I’ll use the humanizer editing skill for a final pass, with your own phrasing as the reference for voice.

## Codex

I drafted a [longer artist statement](/Users/kronosapiens/code/personal/kronosapiens.art/materials/statement-long.md) in first person, alongside your original. It opens with the figures you found in a page of chicken scratch and puts *Identity Matrix* beside *Space Prince*, the pairing you chose. Later, “Where does that energy go?” brings the reader from the pleasure of making patterns to what a player might find worth keeping.

I also added selected excerpts and context to the [practice notes](/Users/kronosapiens/code/personal/kronosapiens.art/materials/practice-notes.md), including the Halloween game, your collaboration with Astra, and your description of feeling like a medieval astronomer. Both changes are uncommitted.

I’d pause the interview and read the draft aloud. For the first revision, I’d focus on one question: **Where do you hear yourself speaking, and where do you hear someone describing you?**

## Daniel Kronovet

Ok great. I think what I'd like now is to try and save this transcript more directly. Can you save it verbatim in a .md file in the repo, and then have a subagent go through and edit it into a magazine-style interview transcript (lightly edit my responeses for grammer and brevity, but do not materially change the language or content, and reframe your questions to be a bit shorter). I think it would be nice to have that as a permanent resource before we proceed. Do you understand what I am asking? Any questions?
