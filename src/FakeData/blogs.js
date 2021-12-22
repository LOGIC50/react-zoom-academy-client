const blogs = [
  {
    name: "Developers Drive",
    author: "Ahmed Jafrul Islam",
    img: "https://i.ibb.co/rQsvbfr/b3.jpg",
    description:
      "As mentioned above, this is a perfect option if you’re just beginning your career in web development. By web developers, for web developers, Developer Drive offers the latest news in the world of web development. This includes opinion articles, tutorials, tips & tricks to start off on the right foot. Are you looking to learn how to minimize downtime? How about ensuring your site is secure and easy for consumers to navigate? Or would you like to keep tabs on every Microsoft software release? From JavaScript to mobile development, Developer Drive has you covered.",
  },
  {
    name: "Simple Programmer",
    author: "Martin Paul",
    img: "https://i.ibb.co/D8WTG2w/b1.png",
    description:
      "While Simple Programmer was originally created by founder John Sonmez to distill what he learned as a web developer into understandable content, today it is focused on helping software developers, programmers and other IT professionals improve their careers and their lives.  This blog gets into the nitty-gritty of being a web developer and if you’ve wondered about something web development related, there’s a good chance they’ve written about it. Simple Programmer puts a fun spin on videos, keeping you engaged with humor while providing valuable content. They’re constantly posting new articles – almost daily – so you’ll never be bored.",
  },
  {
    name: "Modyfing Headers in HTTPS",
    author: "Sumona Jitu",
    img: "https://i.ibb.co/hfG4F0n/b2.jpg",
    description:
      "To be able to modify headers in a testing environment is a great thing to have. It allows control over your application as one can bypass authentication, set cookies, and so on. In this article, Nafees Nehar explores some methods which allow modification of headers in an automation testing setup.There are various methods to modify headers. You can modify headers by using browser extensions or proxy apps (such as Charles and Proxyman) that intercept the request and let you modify the response by including the headers.",
  },
  {
    name: "Designing Better Links For Websites And Emails",
    author: "Oishy Rahman",
    img: "https://i.ibb.co/hfrQnzP/b4.png",
    description:
      "There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links and sending better emails, Slava Shestopalov has a few tips on how to improve your website’s experience while accessibility in mind. Why are “click here” and “by this link” poor choices? And is it acceptable to use “read more”? All these phrases have become so common that many people don’t see any problems with them.",
  },
  {
    name: "A Complete Guide To Accessible Front-End Components",
    author: "Mehedi Hasan",
    img: "https://i.ibb.co/6WfrpYg/b5.png",
    description:
      "In a new short series of posts, we highlight some of the useful tools and techniques for developers and designers. Recently we’ve covered CSS Auditing Tools and CSS Generators, and this time we look into reliable accessible components: from tabs and tables to toggles and tooltips. Every browser has default focus styles, yet out of the box, they aren’t very accessible. The goal of :focus is to give the user guidance on where exactly they are in the document and help them navigate through it.",
  },
  {
    name: "CSS Generators",
    author: "Mark Linn",
    img: "https://i.ibb.co/FznGDf9/b6.jpg",
    description:
      " In a new short series of posts, we highlight some of the useful tools and techniques for developers and designers. This time it’s all about CSS Generators: from CSS shadows to easing gradients to CSS overlays to CSS doodles.Last week, we looked at CSS Auditing tools, and this week around we’ll be looking at useful generators for everything CSS: from gradients to drop-shadows and bezier curves to triangles and type scales. Just a few useful tools for your toolbelt, to keep close.",
  },
  {
    name: "How To Protect Your API Key In Production With Next.js API Route",
    author: "Daniel Bruce",
    img: "https://i.ibb.co/p3bttvS/b7.jpg",
    description:
      "Front-end developers have to interact with private or public APIs whose method of authorization requires a secret key/API key that enables developers to use these APIs. The key(s) are important, hence the need to store/protect the key(s) arises. Creating an environment variable that stores the key is the “go-to” solution that most developers tend to embrace, but there’s a catch. The environment variable does not protect the key(s) from anyone that knows their way around the dev-tools of their browser. That’s why we need to use our keys at server-side when we’re writing our API calls.",
  },
  {
    name: "Top 11 phishing keywords to avoid getting hacked",
    author: "Maisa Akter",
    img: "https://i.ibb.co/D1L3hPv/b8.png",
    description:
      "he purpose of any phishing attack is to trick the victim into doing what the scammer wants. This usually means either clicking a link to launch malicious script, or else getting them to reveal sensitive information. Any cyber pro worth their salt should be able to spot a phishing email. And if you work for a cyber team within an organization, part of your job will involve making sure other employees know how to spot a suspicious message. So in theory, employees will stick to the company’s strict protocols for things like payment authorization and information disclosure. They’ll cross check the sender’s domain. They’ll look at things like formatting, spelling and grammar. They’ll also be very wary of unusual links and forms. ",
  },
  {
    name: "Python named top programming language for 2021",
    author: "Imtiaz Rezvi",
    img: "https://i.ibb.co/SmkMqLw/b9.png",
    description:
      "pectrum, the magazine of the Institute of Electrical and Electronic Engineers (IEEE), has just released its annual interactive global rankings of the top programming languages. These rankings are created by assessing 11 metrics from eight sources: CareerBuilder, GitHub, Google, Hacker News, the IEEE, Reddit, Stack Overflow, and Twitter. Metrics include languages that are growing rapidly, demand among employers, popularity on programming hubs, as well as usage rates in the fields of web development, enterprise, desktop and scientific applications, mobile apps, and device controllers. Python tops the rankings for ALL of these metrics, followed by Java, C, and JavaScript.",
  },
  {
    name: "How to get unlimited Gmail addresses and boost security",
    author: "Prapti Biswas",
    img: "https://i.ibb.co/jrrKg9z/b10.png",
    description:
      "When you first sign up for a Gmail account, you choose a username (e.g. johndoe). This username becomes the first part of your email address (johndoe@gmail.com). You can append a plus (+) sign and any combination of characters after your username, but before the @ sign, (e.g. johndoe+abc123@gmail.com). Any emails sent to that address variation will still come to the primary inbox for johndoe@gmail.com. It works because the Google servers do not read the plus sign and anything that comes after it. When someone sends you an email, you’ll be able to see that they’ve used your alias (e.g. the message will show up as being addressed to",
  },
  {
    name: "Is the cyber security skills gap a myth?",
    author: "Roman Rihan",
    img: "https://i.ibb.co/jTrJcrK/b11.jpg",
    description:
      "If you’ve been following cyber security news over the last few years, you’ll have noticed variations on the same story cropping up time and again: employers can’t recruit the people they need for cyber security, and as a result, millions of posts are going unfilled. The headlines often refer to this as the ‘Cyber Security Skills Gap’. But just how accurate is this? After all, a skills gap is basically a mismatch between what employers want or need particular employees to do, and what those people can actually do when they walk into work. If you cannot find someone who knows how to run a penetration test, then that’s a skills gap.However, if a business automatically discards candidates with hands-on hacking skills but who don’t have a particular college degree, it’s not so much a skills gap it is facing, but a recruiter expectations gap.",
  },
  {
    name: "Is port scanning legal?",
    author: "Saidul Islam",
    img: "https://i.ibb.co/6tJgGHL/b12.png",
    description:
      "Ports are the docking points for the flow of information between devices on a network. Each port has a specific function. To ensure global consistency, these ports are numbered according to a universal system governed by the IANA (Internet Assigned Numbers Authority). In total, there are 65,536 ports. Each port is managed by one of two protocols: the Transmission Control Protocol (TCP), which defines how to establish and maintain a network conversation between applications, and the User Datagram Protocol (UDP), which is mostly used for establishing low-latency connections. The lower the number of the port, the more likely you are to discover it on a port scan. The port numbers in the range from 0 to 1023 are referred to as the well-known ports.",
  },
];
