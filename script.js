const reasons = [

    {
        title: "Your smile",
        text: "Your smile was one of the first things I noticed about you. There is just something about it that makes you look so genuinely happy."
    },

    {
        title: "Your eyes when you smile",
        text: "I don't know how to explain it properly, but your eyes change when you smile. They make your smile feel even more genuine and beautiful."
    },

    {
        title: "The way you smile at people",
        text: "I love that your smile doesn't seem reserved for just certain people. There is something really warm about the way you smile at people."
    },

    {
        title: "Your playful side",
        text: "You seem friendly and playful, but when it comes to the things you truly believe in, especially your faith, you become serious about them. I really like that balance in you."
    },

    {
        title: "Your confidence",
        text: "You seem comfortable being yourself. You don't give me the feeling that you need everyone's approval to feel good about who you are. And honestly, I find that beautiful."
    },

    {
        title: "Your humility",
        text: "Even though you're clearly good at many things, you don't seem to carry yourself like you're above anyone. That quiet confidence with humility is something I really admire about you."
    },

    {
        title: "The way you give your best",
        text: "From what I've seen, you don't just participate in something. You give it everything. Sometimes it genuinely looks like you give 200% of yourself."
    },

    {
        title: "Your passion",
        text: "I love seeing how passionate you become about the things that matter to you. There is something beautiful about watching someone genuinely care."
    },

    {
        title: "The way you sing",
        text: "You sing really well. But somehow, it's not only your voice that I notice. It's the way you look so calm and composed when you sing."
    },

    {
        title: "Your singing voice",
        text: "There is something about your voice when you sing that I find so cute and lovable. I can't really explain it. I just know it makes me smile."
    },

    {
        title: "Your love for Syriac hymns",
        text: "I love that you have an interest in Syriac hymns and liturgy. It's one of those little things that makes you feel even more special to me."
    },

    {
        title: "Your love for Christian songs",
        text: "I really like seeing how much you enjoy Christian songs and the meaning behind them."
    },

    {
        title: "Your love for God's Word",
        text: "Your interest in the Bible is something I genuinely admire. It is beautiful seeing someone who wants to know God's Word more."
    },

    {
        title: "Your love for being in God's presence",
        text: "This might be one of the things I admire most about you. The way you seem to love being in God's presence is something I find genuinely beautiful."
    },

    {
        title: "Your faith",
        text: "I don't know everything about your relationship with God, but from the little I've seen, your faith seems to be something very close to your heart. And I really respect that."
    },

    {
        title: "Your warmth",
        text: "You seem like such a warm person. The kind of person who can make people feel comfortable just by being around them."
    },

    {
        title: "The way you include people",
        text: "I notice the way you seem to make space for people instead of making anyone feel left out. Maybe it seems like a small thing, but I think small things like that say a lot about someone."
    },

    {
        title: "The way you care",
        text: "From what I've seen, you seem to value the people around you. There is something really beautiful about seeing someone care without making a big show of it."
    },

    {
        title: "Your laugh",
        text: "I don't know why, but your laugh is one of those little things that makes me smile. Maybe it's just the way you laugh. Maybe it's the little mannerisms that come with it. Whatever it is... I like it."
    },

    {
        title: "Your little mannerisms",
        text: "There are tiny things you probably don't even realise you do. And somehow, those are the things that become memorable."
    },

    {
        title: "Your cheerful presence",
        text: "You have this cheerful energy that I really like. Seeing you somehow makes things feel a little brighter."
    },

    {
        title: "Your calming presence",
        text: "And somehow, you're also calming. It's strange how someone can feel both cheerful and peaceful at the same time. But that's how your presence feels to me."
    },

    {
        title: "Your fashion sense",
        text: "Okay, I have to admit this one. You have really good fashion sense. I like the way you dress and the way you carry your own style."
    },

    {
        title: "Your independence",
        text: "You seem like someone who can stand on her own, handle things herself, and still remain completely herself. I really respect that strength in you."
    },

    {
        title: "The way you seem genuine",
        text: "I can't point to one particular moment and say why. It's just a feeling I get from you. Something about you feels genuine to me."
    },

    {
        title: "The things I don't know about you yet",
        text: "There is still so much about you that I don't know. What makes you laugh the most, what you dream about, what you think about, the little things that make you happy. Somehow, I really want to know."
    },

    {
        title: "The way you make me feel",
        text: "Seeing you somehow makes me super happy. Then come the butterflies. Then the nervousness. Somehow, just seeing your name can do all of that to me."
    },

    {
        title: "Seeing you do well",
        text: "Even though I'm not someone close to you, when I see you doing well, I genuinely feel happy for you. I don't know why. I just find myself smiling and thinking, I'm really happy for her."
    },

    {
        title: "Your character and your talent",
        text: "There are many things I find beautiful about you — your smile, your faith, your passion, your talent. But more than all of those, I think it's the person you seem to be that keeps making me notice you."
    },

    {
        title: "Maybe you feel like home... or maybe grace.",
        text: "I can give you thirty reasons, but somehow none of them completely explain why I like you. Maybe it's all of them together. Maybe it's simply the way something about you feels strangely familiar to my heart. And if I had to find two words for that feeling... you feel like home. Or maybe... grace."
    }

];


let currentReason = 0;


function openReasons() {

    document.querySelector(".welcome").style.display = "none";

    document.getElementById("reasons").style.display = "flex";

    showReason();

}


function showReason() {

    const reason = reasons[currentReason];
    const reasonSection = document.getElementById("reasons");

reasonSection.classList.remove("deep-blue", "violet");

if (currentReason >= 10 && currentReason < 20) {
    reasonSection.classList.add("deep-blue");
}

if (currentReason >= 20 && currentReason < 29) {
    reasonSection.classList.add("violet");
}

    const number = String(currentReason + 1).padStart(2, "0");

    document.querySelector("#reasons > p:first-child").textContent =
        number + " / 30";

    document.querySelector("#reasons > p:nth-of-type(2)").textContent =
        "A little thing I noticed about you...";

    document.querySelector("#reasons h2").textContent =
        reason.title;

    document.querySelector("#reasons > p:nth-of-type(3)").textContent =
        reason.text;
    const reasonSection = document.getElementById("reasons");

reasonSection.classList.remove("reason-changing");

void reasonSection.offsetWidth;

reasonSection.classList.add("reason-changing");

}


function nextReason() {

    currentReason++;

    if (currentReason >= reasons.length) {
        currentReason = reasons.length - 1;
        return;
    }

    showReason();
}

window.openReasons = openReasons;
window.nextReason = nextReason;
