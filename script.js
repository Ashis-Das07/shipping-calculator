function calculateShipping() {

    let weight = Number(document.getElementById("weight").value);
    let delivery = document.getElementById("delivery").value;

    if (weight <= 0 || !Number.isFinite(weight)) {
        document.getElementById("result").innerHTML =
            "Please enter a valid weight!";
        return;
    }

    let cost;

    if (delivery === "standard") {
        cost = weight * 50;
    } else {
        cost = weight * 100;
    }

    document.getElementById("result").innerHTML =
        "Total Shipping Cost: ₹" + cost;
}