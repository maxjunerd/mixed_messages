messages = [
    {
        message: "Ambition is the path to success. Persistence is the vehicle you arrive in.",
        author: "Bill Bradley"
    },
    {
        message: "Give it your all. Whatever work you do, do it to the best of your ability.",
        author: "Jerry Dorsman and Bob Davis"
    },
    {
        message: "When ordinary people decide to step out and be part of something big, that’s when they become extraordinary.",
        author: "Brett Harris, Do Hard Things"
    },
    {
        message: "Inspiration responds to our attentiveness in various and sometimes unexpected ways.",
        author: "Wayne W. Dyer"
    },
    {
        message: "Words can inspire, thoughts can provoke, but only action truly brings you closer to your dreams.",
        author: "Brad Sugars"
    },
    {
        message: "Having a specific meaning and purpose in your life helps to encourage you towards living a fulfilling and inspired life.",
        author: "Vic Johnson"
    },
    {
        message: "When you see the world through serene eyes, you generate peace wherever you go.",
        author: "Jerry Dorsman and Bob Davis"
    },
    {
        message: "Embrace the present moment fully and with passion, because only through the present moment do we truly live.",
        author: "Richard L. Haight"
    }
];

random = Math.floor(Math.random() * messages.length);

console.log(`Today message is: ${messages[random]["message"]} by ${messages[random]["author"]}`);