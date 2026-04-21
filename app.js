function zakatCalculte() {

    // ---------------------------------------
    // 2026 সালের fixed nisab
    // এই calculator শুধু ২০২৬ সালের জন্য
    // ---------------------------------------
    const NISAB_2026 = 230000;

    // ---------------------------------------
    // input field থেকে user-এর লেখা value নেওয়া
    // value শুরুতে string হিসেবে আসে
    // ---------------------------------------
    let zakatAmount = document.getElementById("zakatAmount").value;

    // ---------------------------------------
    // string কে number-এ convert করা
    // ---------------------------------------
    let convertNumber = Number(zakatAmount);

    // ---------------------------------------
    // যাকাতের হার 2.5%
    // তাই total amount × 0.025
    // ---------------------------------------
    let calculateAmount = convertNumber * 0.025;

    // ---------------------------------------
    // Result box select করা
    // বারবার না লিখে variable এ রাখলাম
    // ---------------------------------------
    let resultBox = document.getElementById("result");

    // ---------------------------------------
    // যদি input খালি হয়, 0 হয়, বা ভুল হয়
    // ---------------------------------------
    if (zakatAmount === "" || convertNumber <= 0 || isNaN(convertNumber)) {
        resultBox.innerHTML = "অনুগ্রহ করে সঠিক টাকার পরিমাণ লিখুন।";
        return;
    }

    // ---------------------------------------
    // যদি amount nisab-এর কম হয়
    // তাহলে যাকাত ফরজ নয়
    // ---------------------------------------
    if (convertNumber < NISAB_2026) {
        resultBox.innerHTML =
            "আপনার মোট সম্পদ নিসাব পরিমাণে পৌঁছেনি।<br>" +
            "২০২৬ সালের নিসাব: ৳" + NISAB_2026.toLocaleString("en-BD") + "<br>" +
            "তাই এই হিসাবে আপনার উপর যাকাত ফরজ নয়।";
        return;
    }

    // ---------------------------------------
    // যদি nisab বা তার বেশি হয়
    // তাহলে 2.5% যাকাত দেখাবে
    // ---------------------------------------
    resultBox.innerHTML =
        "আপনার যাকাত:<br>" +
        "৳" + calculateAmount.toFixed(2) + "<br>" +
        "<span style='font-size:14px; color:#cbd5e1;'>"
        + "২০২৬ নিসাব অনুযায়ী হিসাব করা হয়েছে"
        + "</span>";
}