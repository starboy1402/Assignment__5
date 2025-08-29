// Find them as NodeList
const love = document.querySelectorAll(".heart-icon");
const serviceTitle = document.querySelectorAll(".service-title");
const subTitle = document.querySelectorAll(".service");
const helpline = document.querySelectorAll(".helpline");
const copy = document.querySelectorAll(".copy");
const call = document.querySelectorAll(".call");

// Get value of an element
function getValue(id) {
  return parseInt(document.getElementById(id).innerText);
}

// Set value to an element
function setValue(id, value) {
  document.getElementById(id).innerText = value;
}

// Toggle features with two buttons for small/mobile devices (upto 640px)
function toggle_mode_for_mobile_device(id) {
  document.getElementById("card-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id).classList.add("block");

  // If window-width > 640px, then remove toggle feature and display both card and history section fully.
  window.addEventListener("resize", () => {
    if (window.outerWidth > 640) {
      document.getElementById("card-section").classList.remove("hidden");
      document.getElementById("card-section").classList.add("block");
    }
  });
}

// Responsive mode (small/mobile devices): Toggling button background
function toggle_button_bg(id) {
  document.getElementById("see-hotlines-btn").classList.add("bg-lime-100");
  document.getElementById("see-call-history-btn").classList.add("bg-lime-100");
  document.getElementById(id).classList.remove("bg-lime-100");
}

// Toggle features with two buttons for small/mobile devices (upto 640px)
document.getElementById("see-hotlines-btn").addEventListener("click", () => {
  toggle_mode_for_mobile_device("card-section");
  toggle_button_bg("see-hotlines-btn");
});

document.getElementById("see-call-history-btn").addEventListener("click", () => {
  toggle_mode_for_mobile_device("history-section");
  toggle_button_bg("see-call-history-btn");
});

// Click to heart-icon of any cards and increase count
for (let i = 0; i < love.length; i++) {
  love[i].addEventListener("click", () => {
    setValue("heart-count", getValue("heart-count") + 1);
  });
}

// Click to copy button of any cards
for (let i = 0; i < copy.length; i++) {
  copy[i].addEventListener("click", () => {
    navigator.clipboard
      .writeText(helpline[i].innerText)
      .then(() => {
        alert(`নম্বর কপি করা হয়েছে (Number is copied): ${helpline[i].innerText}`);
      })
      .catch((error) => {
        alert(`নম্বর কপি করতে ব্যর্থ (Failed to copy), ${error}`);
        return;
      });
    setValue("copy-count", getValue("copy-count") + 1);
  });
}

// Click to call button of any cards
for (let i = 0; i < call.length; i++) {
  call[i].addEventListener("click", () => {
    const currentCoin = getValue("coin-count");
    if (currentCoin < 20) {
      alert(`❌ আপনার কাছে পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20 টি কয়েন লাগবে।`);
      return;
    }
    setValue("coin-count", currentCoin - 20);

    alert(`📞 Calling ${subTitle[i].innerText} (${serviceTitle[i].innerText}) \n ${helpline[i].innerText}`);
    const lastCall = document.createElement("div");
    lastCall.innerHTML = `
        <div class="bg-gray-50 flex justify-between items-center p-3 inter-font text-sm rounded-lg gap-1 mt-3 ">
            <div>
                <h1 class="mb-[2px] font-semibold">${serviceTitle[i].innerText}</h1>
                <p class="text-gray-600">${helpline[i].innerText}</p>
            </div>
            <p>${new Date().toLocaleTimeString()}</p>
        </div>
        `;
    const container = document.getElementById("history-container");
    container.insertBefore(lastCall, container.firstChild);
  });
}

// Clear call history
document.getElementById("clear-btn").addEventListener("click", () => {
  document.getElementById("history-container").innerText = "";
});