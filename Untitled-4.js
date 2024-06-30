const text = `О Аллах, поистине, я прошу у Тебя наставления посредством Твоего знания и способности посредством Твоего могущества, и я прошу у Тебя Твоей великой милости, ибо Ты способен, а я не способен; Ты знаешь, а я не знаю, и Ты - знающий о сокровенном. О Аллах, если Ты знаешь, что это дело является благом для меня в моей религии, моей жизни и исходе моего дела (или сказал: в близком и отдалённом будущем), то предопредели это для меня, облегчи это для меня и благослови меня в этом, а если Ты знаешь, что это дело является злом для меня в моей религии, моей жизни и исходе моего дела (или сказал: в близком и отдалённом будущем), то отврати это от меня и отврати меня от этого, и предопредели для меня благо, где бы оно ни было, и сделай меня довольным этим.`;

const typewriterText = document.getElementById('typewriter-text');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typewriterText.innerHTML += text.charAt(index);
        index++;
        new Audio('typewriter-key.wav').play(); // Path to typewriter key sound
        setTimeout(typeWriter, 100);
    }
}

window.onload = function() {
    typeWriter();
};
// JavaScript Document