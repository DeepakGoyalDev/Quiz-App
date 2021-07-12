const fetchQuestions = (url) =>{
    console.log(url);
    const data = 
        [
            {
            "id": 807,
            "question": "How to kill a container?",
            "description": null,
            "answers": {
            "answer_a": "docker terminated <container_id>",
            "answer_b": "docker kill <container_id>",
            "answer_c": "$ docker --kill <container_id>",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
            },
            "multiple_correct_answers": "true",
            "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
            },
            "correct_answer": "answer_a",
            "explanation": null,
            "tip": null,
            "tags": [
            {
            "name": "Docker"
            }
            ],
            "category": "Docker",
            "difficulty": "Easy"
            },
            {
            "id": 231,
            "question": "Which of the following SQL statements is correct?",
            "description": null,
            "answers": {
            "answer_a": "SELECT cname, COUNT(cname) FROM Orders",
            "answer_b": "SELECT cname, COUNT(cname) FROM Orders GROUP BY cname",
            "answer_c": "SELECT cname, COUNT(cname) FROM Orders ORDER BY cname",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
            },
            "multiple_correct_answers": "false",
            "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
            },
            "correct_answer": "answer_a",
            "explanation": null,
            "tip": null,
            "tags": [
            {
            "name": "MySQL"
            }
            ],
            "category": "SQL",
            "difficulty": "Hard"
            },
            {
            "id": 310,
            "question": "What dos the acronym CMS stands for?",
            "description": null,
            "answers": {
            "answer_a": "Common manager system",
            "answer_b": "Content manager system",
            "answer_c": "Content management system",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
            },
            "multiple_correct_answers": "false",
            "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
            },
            "correct_answer": "answer_a",
            "explanation": null,
            "tip": null,
            "tags": [
            {
            "name": "WordPress"
            }
            ],
            "category": "CMS",
            "difficulty": "Easy"
            },
            {
            "id": 770,
            "question": "Which of the following type of variables are floating-point numbers, like 3.14159 or 49.1?",
            "description": null,
            "answers": {
            "answer_a": "Integers",
            "answer_b": "Doubles",
            "answer_c": "Booleans",
            "answer_d": "Strings",
            "answer_e": null,
            "answer_f": null
            },
            "multiple_correct_answers": "false",
            "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
            },
            "correct_answer": null,
            "explanation": "Doubles: are floating-point numbers, like 3.14159 or 49.1.",
            "tip": null,
            "tags": [
            {
            "name": "PHP"
            }
            ],
            "category": "Code",
            "difficulty": "Medium"
            },
            {
            "id": 994,
            "question": "How do you declare a JavaScript variable?",
            "description": null,
            "answers": {
            "answer_a": "v carName;",
            "answer_b": "variable carName;",
            "answer_c": "var carName;",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
            },
            "multiple_correct_answers": "false",
            "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
            },
            "correct_answer": "answer_a",
            "explanation": null,
            "tip": null,
            "tags": [
            {
            "name": "JavaScript"
            }
            ],
            "category": "Code",
            "difficulty": "Easy"
            },
            {
            "id": 880,
            "question": "Which are the notable application areas for Docker?",
            "description": null,
            "answers": {
            "answer_a": "Simplifying configuration, Code pipelines management, Debugging capabilities and Rapid deployment.",
            "answer_b": "Robust, Transparency, code illustrator and slow deployment",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
            },
            "multiple_correct_answers": "false",
            "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
            },
            "correct_answer": "answer_a",
            "explanation": null,
            "tip": null,
            "tags": [
            {
            "name": "Docker"
            }
            ],
            "category": "Docker",
            "difficulty": "Medium"
            },
            {
            "id": 445,
            "question": "HTML Is a subset of",
            "description": null,
            "answers": {
            "answer_a": "SGMT",
            "answer_b": "None Of These",
            "answer_c": "SGML",
            "answer_d": "SGMD",
            "answer_e": null,
            "answer_f": null
            },
            "multiple_correct_answers": "false",
            "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
            },
            "correct_answer": "answer_a",
            "explanation": null,
            "tip": null,
            "tags": [
            {
            "name": "HTML"
            }
            ],
            "category": "Code",
            "difficulty": "Medium"
            },
            {
            "id": 908,
            "question": "__________________ is responsible for health check of the pods running on individual nodes",
            "description": null,
            "answers": {
            "answer_a": "Kubectl",
            "answer_b": "Kubelet",
            "answer_c": "Kube scheduler",
            "answer_d": "Kube controller manager",
            "answer_e": null,
            "answer_f": null
            },
            "multiple_correct_answers": "false",
            "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
            },
            "correct_answer": null,
            "explanation": null,
            "tip": null,
            "tags": [
            {
            "name": "Kubernetes"
            }
            ],
            "category": "Docker",
            "difficulty": "Easy"
            },
            {
            "id": 977,
            "question": "The external JavaScript file must contain the <script> tag.",
            "description": null,
            "answers": {
            "answer_a": "True",
            "answer_b": "False",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
            },
            "multiple_correct_answers": "false",
            "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
            },
            "correct_answer": "answer_a",
            "explanation": null,
            "tip": null,
            "tags": [
            {
            "name": "JavaScript"
            }
            ],
            "category": "Code",
            "difficulty": "Easy"
            },
            {
            "id": 832,
            "question": "Which of the following is a tool for defining and running multi-container Docker applications.",
            "description": null,
            "answers": {
            "answer_a": "Docker Swarn",
            "answer_b": "Docker Cloud",
            "answer_c": "Docker Hub",
            "answer_d": "Docker Hub",
            "answer_e": null,
            "answer_f": null
            },
            "multiple_correct_answers": "false",
            "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
            },
            "correct_answer": "answer_a",
            "explanation": null,
            "tip": null,
            "tags": [
            {
            "name": "Docker"
            }
            ],
            "category": "Docker",
            "difficulty": "Medium"
            }
        ];

    return data;
}

export default fetchQuestions;


// "data" : {
// "cuurent_question" : 1,
// "question_answer_array" : [
//     {
//         "question" : {
//             "id": 977,
//             "question": "The external JavaScript file must contain the <script> tag.",
//             "description": null,
//             "answers": {
//             "answer_a": "True",
//             "answer_b": "False",
//             "answer_c": null,
//             "answer_d": null,
//             "answer_e": null,
//             "answer_f": null
//             },
//             "multiple_correct_answers": "false",
//             "correct_answers": {
//             "answer_a_correct": "false",
//             "answer_b_correct": "true",
//             "answer_c_correct": "false",
//             "answer_d_correct": "false",
//             "answer_e_correct": "false",
//             "answer_f_correct": "false"
//             },
//             "correct_answer": "answer_a",
//             "explanation": null,
//             "tip": null,
//             "tags": [
//             {
//             "name": "JavaScript"
//             }
//             ],
//             "category": "Code",
//             "difficulty": "Easy"
//             },
//         "selected_answers" : {
//             "answer_a" : "false",
//             "answer_b" : "false",
//             "answer_c" : "false",
//             "answer_d" : "false",
//             "answer_e" : "false",
//             "answer_f" : "false"
//         }
//     }
// ] 
// }