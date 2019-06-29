module.exports = (req, res, client) => {
    req.client.channels.get("594433033755688980").send("<@210441241387728896> a new policy purchase has been initiated. Do you confirm?")
    .then((message) => {
        message.react("✅").then(() => message.react("❌"));

        const filter =  (reaction, user) => {
            return ['✅', '❌'].includes(reaction.emoji.name) && user.id == "210441241387728896";
        }

        message.awaitReactions(filter, {
            max: 1,
            time: 60000,
        }).then(collected => {
            console.log(collected);
            const reaction = collected.first();

            if (reaction.emoji.name == "❌"){
                req.client.channels.get("594433033755688980").send("<@210441241387728896>, policy purchase cancelled!");
                req.io.emit("txn_cancel", "CANCELLED");
            } else {
                req.client.channels.get("594433033755688980").send("<@210441241387728896>, policy purchase confirmed!");
                req.io.emit("txn_confirm", "CONFIRMED");
            }
        })
        res.send("Cool");
    })
}