exports.handler = async function(event, context) {
    // Ensure this is a POST request
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    // Parse the JSON body
    const data = JSON.parse(event.body);

    // Example: process the data (replace this with your actual processing)
    const generatedPlan = `Hello! Here is your personalized learning plan.`;

    // Return the response
    return {
        statusCode: 200,
        body: JSON.stringify({ generatedPlan: generatedPlan }),
    };
};
