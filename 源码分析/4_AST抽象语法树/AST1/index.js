import parse from "./parse.js";

var templateString = `<div>
    <h3 class="asd" id="container">你好</h3>
    <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
    </ul>
</div>`;

const ast = parse(templateString);
console.log(ast);

/**

[
    { "children": [] },
    {
        "tag": "div",
        "children": [
            {
                "tag": "h3",
                "children": [
                    { "text": "你好", "type": 3 }
                ],
                "attrs": [
                    { "name": "class", "value": "asd" },
                    { "name": " id", "value": "container" }
                ]
            },
            {
                "tag": "ul", "children": [
                    {
                        "tag": "li", "children": [
                            { "text": "A", "type": 3 }
                        ],
                        "attrs": []
                    },
                    {
                        "tag": "li", "children": [
                            { "text": "B", "type": 3 }
                        ],
                        "attrs": []
                    },
                    {
                        "tag": "li",
                        "children": [
                            { "text": "C", "type": 3 }
                        ],
                        "attrs": []
                    }
                ],
                "attrs": []
            }
        ],
        "attrs": []
    }
]

 */