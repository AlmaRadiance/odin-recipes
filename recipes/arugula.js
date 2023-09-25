
// arugula.js

    function downloadPDF() {
        const pdf = new jsPDF();

        const title = 'Arugula Salad Recipe';
        const intro = 'Elevate your arugula salad with the addition of salty and savory prosciutto. This delightful salad combines the peppery bite of arugula with the sweetness of ripe cherry tomatoes, the richness of creamy goat cheese, the crunch of toasted pine nuts, and the luxurious flavors of prosciutto. The balsamic vinaigrette dressing brings all these components together for a balanced and satisfying dish.';
        const ingredients = [
            "cups fresh arugula leaves, washed and dried",
            "1 cup cherry tomatoes, halved",
            "1/2 cup crumbled goat cheese",
            "3-4 slices of prosciutto, torn into bite-sized pieces",
            "1/4 cup pine nuts, toasted",
            "1/4 cup extra-virgin olive oil",
            "1 teaspoon Dijon mustard",
            "1 clove garlic, minced",
            "Salt and freshly ground black pepper, to taste"
        ];
        const directions = [
            "Step 1: Wash and dry the arugula leaves thoroughly. Place them in a large salad bowl. Cut the cherry tomatoes in half and add them to the bowl with the arugula. Crumble the goat cheese and set it aside. Tear the prosciutto slices into bite-sized pieces and set them aside. Toast the pine nuts in a dry skillet over medium heat for about 2-3 minutes until golden brown and fragrant. Set them aside.",
            "Step 2: In a small bowl, whisk together the balsamic vinegar, Dijon mustard, minced garlic, salt, and black pepper. Slowly drizzle in the extra-virgin olive oil while whisking continuously to create an emulsified dressing. Continue whisking until well combined and slightly thickened.",
            "Step 3: Drizzle the balsamic vinaigrette over the arugula and cherry tomatoes in the salad bowl. Gently toss to evenly coat the ingredients with the dressing. Sprinkle the crumbled goat cheese over the dressed salad. Add the torn prosciutto pieces to the salad for an added layer of flavor. Sprinkle the toasted pine nuts over the salad to provide a satisfying crunch. Give the salad a final gentle toss to ensure all the components are well distributed."
        ];

        pdf.setFontSize(16);
        pdf.text(title, 10, 10);

        pdf.setFontSize(12);
        pdf.text(intro, 10, 20);

        pdf.setFontSize(14);
        pdf.text('Ingredients', 10, 40);

        const ingredientsText = ingredients.join('\n'); // Join elements into a single string
        pdf.setFontSize(12);
        pdf.text(ingredientsText, 20, 50); // Add the joined string to the PDF

        pdf.setFontSize(14);
        pdf.text('Directions', 10, 80);

        const directionsText = directions.join('\n\n'); // Join elements into a single string with double line breaks
        pdf.setFontSize(12);
        pdf.text(directionsText, 20, 90); // Add the joined string to the PDF

        pdf.save('arugula_recipe.pdf');
    }

