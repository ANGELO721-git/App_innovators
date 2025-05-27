document.addEventListener('DOMContentLoaded', () => {
    const situationElement = document.getElementById('situation');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    const resultContainer = document.getElementById('result-container');
    const finalScoreElement = document.getElementById('final-score');

    const quizData = [{
            situation: "1) École à Bouaké sans toilettes depuis 2 mois",
            question: "Quelle action devrait être prioritaire ?",
            options: [
                "Leur distribuer des vêtements",
                "Installer des toilettes et des lavabos avec eau et savon",
                "Mettre des plantes autour de l’école",
                "Interdire les pauses toilettes"
            ],
            correctAnswer: "Installer des toilettes et des lavabos avec eau et savon"
        },
        {
            situation: "2) Village de Katiola – eau trouble pendant la saison sèche",
            question: "Quelle est la méthode la plus sûre pour consommer cette eau ?",
            options: [
                "Boire sans crainte",
                "Faire bouillir l’eau avant de la boire",
                "Ajouter du sel",
                "Attendre la pluie"
            ],
            correctAnswer: "Faire bouillir l’eau avant de la boire"
        },
        {
            situation: "3) Bébé malade après avoir bu de l’eau d’un puits non protégé",
            question: "Quelle mesure préventive est la plus efficace ?",
            options: [
                "Changer de puits chaque semaine",
                "Couvrir le puits et filtrer ou traiter l’eau",
                "Donner plus de nourriture",
                "Mettre l’eau au réfrigérateur"
            ],
            correctAnswer: "Couvrir le puits et filtrer ou traiter l’eau"
        },
        {
            situation: "4) Camp de déplacés sans latrines et eaux stagnantes",
            question: "Que faire en priorité ?",
            options: [
                "Installer des ventilateurs pour chasser les odeurs",
                "Mettre en place un système d’assainissement",
                "Utiliser des parfums",
                "Creuser des trous au hasard"
            ],
            correctAnswer: "Mettre en place un système d’assainissement"
        },
        {
            situation: "5) Eau du robinet avec odeur étrange à Abidjan",
            question: "Quelle est la meilleure attitude ?",
            options: [
                "Réutiliser l’eau de vaisselle pour les douches",
                "Vérifier la qualité de l’eau et utiliser de l’eau propre",
                "Arrêter de se laver",
                "Utiliser moins de savon"
            ],
            correctAnswer: "Vérifier la qualité de l’eau et utiliser de l’eau propre"
        },
        {
            situation: "6) École de Yamoussoukro – élèves ne se lavent pas les mains",
            question: "Quelle est la solution la plus efficace ?",
            options: [
                "Fournir des mouchoirs",
                "Supprimer les toilettes",
                "Installer un dispositif de lavage des mains avec eau et savon",
                "Distribuer des gants"
            ],
            correctAnswer: "Installer un dispositif de lavage des mains avec eau et savon"
        },
        {
            situation: "7) Korhogo – eaux usées à ciel ouvert dans un quartier",
            question: "Quelle est la meilleure solution ?",
            options: [
                "Les interdire de sortir",
                "Mettre en place un système de collecte des eaux usées",
                "Mettre des pancartes",
                "Laisser faire, ce n’est pas grave"
            ],
            correctAnswer: "Mettre en place un système de collecte des eaux usées"
        },
        {
            situation: "8) Bongouanou – consommation d’eau de pluie stockée",
            question: "Quel est le bon réflexe ?",
            options: [
                "Ne rien faire, l’eau de pluie est toujours pure",
                "Filtrer et stocker correctement cette eau",
                "La mélanger avec du jus",
                "La boire dès qu’elle tombe"
            ],
            correctAnswer: "Filtrer et stocker correctement cette eau"
        },
        {
            situation: "9) Femme enceinte à Toumodi buvant de l’eau de rivière",
            question: "Quelle est la mesure la plus sûre ?",
            options: [
                "Laisser faire, c’est naturel",
                "L’encourager à boire une eau filtrée ou bouillie",
                "Lui donner de l’eau gazeuse",
                "Réduire sa consommation d’eau"
            ],
            correctAnswer: "L’encourager à boire une eau filtrée ou bouillie"
        },
        {
            situation: "10) Enfants malades après avoir bu l’eau du robinet à Gagnoa",
            question: "Que doit-on faire ?",
            options: [
                "Utiliser l’eau sans vérification",
                "Boire plus pour renforcer l’immunité",
                "Faire analyser l’eau et la traiter si nécessaire",
                "Laisser reposer l’eau au soleil"
            ],
            correctAnswer: "Faire analyser l’eau et la traiter si nécessaire"
        },
        {
            situation: "11) Festival à San Pedro – pas d’eau potable pour les campeurs",
            question: "Quelle mesure d’urgence prendre ?",
            options: [
                "Distribuer des bonbons pour l’énergie",
                "Fournir de l’eau potable en bidons propres",
                "Rappeler de ne pas trop boire",
                "Répartir l’eau de vaisselle"
            ],
            correctAnswer: "Fournir de l’eau potable en bidons propres"
        },
        {
            situation: "12) Latrines creusées à 3 m d’un puits à Ferkessédougou",
            question: "Pourquoi est-ce un problème ?",
            options: [
                "Ce n’est pas esthétique",
                "Risque de contamination des sources d’eau",
                "Ce n’est pas assez profond",
                "Ce n’est pas grave, l’eau est claire"
            ],
            correctAnswer: "Risque de contamination des sources d’eau"
        },
        {
            situation: "13) Enfant malade après avoir bu dans un seau laissé ouvert",
            question: "Que doit-on vérifier ?",
            options: [
                "Si le seau est joli",
                "Si l’enfant a trop bu",
                "Si le seau était propre et couvert",
                "Si l’eau venait de la pluie"
            ],
            correctAnswer: "Si le seau était propre et couvert"
        },
        {
            situation: "14) Douches collectives manquent de savon à Odienné",
            question: "Quel est le bon geste ?",
            options: [
                "Accélérer les douches",
                "Ne rien faire, c’est passager",
                "Fournir savon et hygiène de base",
                "Mettre un rideau neuf"
            ],
            correctAnswer: "Fournir savon et hygiène de base"
        },
        {
            situation: "15) Puits communautaire mal entretenu à Séguéla",
            question: "Que faire ?",
            options: [
                "Attendre qu’il sente mauvais pour agir",
                "Nettoyer, couvrir et vérifier régulièrement le puits",
                "Mettre des plantes autour",
                "Y verser de l’eau de javel"
            ],
            correctAnswer: "Nettoyer, couvrir et vérifier régulièrement le puits"
        },
        {
            situation: "16) Élève absente à chaque période menstruelle à Adzopé",
            question: "Quelle est la meilleure solution ?",
            options: [
                "Ne pas en parler",
                "Installer des toilettes séparées et privées avec eau et savon",
                "L’obliger à venir quand même",
                "Lui donner des feuilles"
            ],
            correctAnswer: "Installer des toilettes séparées et privées avec eau et savon"
        },
        {
            situation: "17) Hôpital de Duékoué rejetant les eaux usées dans la rivière",
            question: "Quel est le risque principal ?",
            options: [
                "Mauvais fonctionnement des machines",
                "Risque de propagation de maladies dans la communauté",
                "Trop d’humidité",
                "Manque de personnel"
            ],
            correctAnswer: "Risque de propagation de maladies dans la communauté"
        },
        {
            situation: "18) Vendeur de rue à Marcory lave les légumes avec de l’eau douteuse",
            question: "Que faire en tant que client ?",
            options: [
                "Continuer à manger",
                "Demander si l’eau est potable",
                "Apporter sa propre eau",
                "Laver ses mains après"
            ],
            correctAnswer: "Demander si l’eau est potable"
        },
        {
            situation: "19) Réservoir non couvert utilisé par un lave-linge communautaire",
            question: "Que faire ?",
            options: [
                "Utiliser l’eau de pluie stagnante",
                "Apporter de l’eau potable propre pour le rinçage",
                "Ne pas laver les vêtements",
                "Mettre plus de savon"
            ],
            correctAnswer: "Apporter de l’eau potable propre pour le rinçage"
        },
        {
            situation: "20) Enfant boit dans un tuyau d’arrosage laissé au soleil",
            question: "Pourquoi ce geste est-il risqué ?",
            options: [
                "L’eau est trop chaude",
                "Le tuyau peut contenir des bactéries et l’eau stagnante est contaminée",
                "Ce n’est pas risqué",
                "C’est rafraîchissant"
            ],
            correctAnswer: "Le tuyau peut contenir des bactéries et l’eau stagnante est contaminée"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let canAnswer = true; // Pour éviter de répondre plusieurs fois à la même question

    function loadQuestion() {
        if (currentQuestionIndex < quizData.length) {
            const currentQuestion = quizData[currentQuestionIndex];
            situationElement.textContent = currentQuestion.situation;
            questionElement.textContent = currentQuestion.question;
            optionsElement.innerHTML = '';
            currentQuestion.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', () => checkAnswer(option, button));
                optionsElement.appendChild(button);
            });
            canAnswer = true;
        } else {
            showResults();
        }
    }

    function checkAnswer(selectedAnswer, buttonClicked) {
        if (canAnswer) {
            canAnswer = false;
            const currentQuestion = quizData[currentQuestionIndex];
            const buttons = optionsElement.querySelectorAll('button');

            buttons.forEach(button => {
                if (button.textContent === currentQuestion.correctAnswer) {
                    button.classList.add('correct');
                }
                if (button.textContent === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
                    button.classList.add('incorrect');
                }
                button.disabled = true; // Désactiver tous les boutons après la réponse
            });

            if (selectedAnswer === currentQuestion.correctAnswer) {
                score++;
            }

            // Passer automatiquement à la question suivante après 1 seconde
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < quizData.length) {
                    loadQuestion();
                } else {
                    showResults();
                }
            }, 500); // Délai de 1 seconde
        }
    }

    function showResults() {
        questionElement.style.display = 'none';
        optionsElement.style.display = 'none';
        if (nextButton) {
            nextButton.style.display = 'none';
        }
        resultContainer.style.display = 'block';

        // Affichage du score final
        finalScoreElement.textContent = `Votre score final est : ${score} / ${quizData.length}`;

        // Ajout du message personnalisé
        const message = document.createElement('p');
        if (score > 10) {
            message.textContent = "Félicitations ! Vous avez un excellent score ! 🎉";
            message.style.color = "green";
        } else {
            message.textContent = "Faites mieux la prochaine fois ! Vous pouvez y arriver ! 💪";
            message.style.color = "red";
        }
        resultContainer.appendChild(message);
    }

    loadQuestion();
});
