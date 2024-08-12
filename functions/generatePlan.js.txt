exports.handler = async function(event, context) {
    // Check if it's a POST request (like checking if it's the right time for a task)
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    // Read the message (data) sent to our helper
    const data = JSON.parse(event.body);

    // Process the message and create a special plan (this is the magic part!)
    const generatedPlan = `Hello, ${data.name}! Here is your personalised learning plan.`;

    // Send the plan back to whoever asked for it
    return {
        statusCode: 200,
        body: JSON.stringify({ generatedPlan: generatedPlan }),
    };
};
