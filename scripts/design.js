const seats = document.getElementsByClassName('seat');
const allSeats = 40;
const totalPrice = document.getElementById('total-price');
let grandTotal = document.getElementById('grand-total');
const couponSection = document.getElementById('coupon');
const couponBtn = document.getElementById('coupon-btn');
const couponField = document.getElementById('input-coupon');
const leftSeats = document.getElementById('left-seats');
const seatCount = document.getElementById('seat-count');
const seatList = document.getElementById('seat-list');
const nextButton = document.getElementById('next');

const maxSeats = 4;
let selectedSeats = [];
let totalAmount = 0;

for (const seat of seats) {
  seat.addEventListener('click', function (e) {
    if (!seat.classList.contains('selected')) {
      if (selectedSeats.length < maxSeats) {
        seat.classList.add('selected');
        const selects = document.getElementsByClassName('selected');

        // Iterate over each selected seat and apply styles
        for (let i = 0; i <= selectedSeats.length; i++) {
          selects[i].style.color = 'white';
          selects[i].style.backgroundColor = 'green';
        }

        nextButton.removeAttribute('disabled');

        const seatNumber = seat.innerText;
        const seatPrice = 550;
        const array = selectedSeats.push({ seat: seatNumber, price: seatPrice });
        totalAmount += seatPrice;
        totalPrice.innerText = totalAmount;
        grandTotal.innerText = totalAmount;

        const totalSeat = selectedSeats.length;
        const minusSeat = allSeats - totalSeat;

        leftSeats.innerText = `${minusSeat} Seat Lefts`;
        seatCount.innerText = totalSeat;

        const seatNum = document.createElement('div');
        const seatClass = document.createElement('div');
        const sPrice = document.createElement('div');
        seatNum.innerText = seatNumber;
        seatClass.innerText = 'Economy';
        sPrice.innerText = seatPrice;
        seatList.appendChild(seatNum);
        seatList.appendChild(seatClass);
        seatList.appendChild(sPrice);

        if (totalSeat === 4) {
          couponBtn.removeAttribute('disabled');
          couponField.removeAttribute('disabled');
          couponBtn.addEventListener('click', function () {
            if (couponField.value === 'NEW15') {
              const discount = (totalAmount * 15) / 100;
              totalAmount -= discount;
              grandTotal.innerText = totalAmount;
              couponBtn.remove();
              couponField.remove();
              let totalDiscountDiv = document.createElement('div');
              totalDiscountDiv.classList.add('text-xl', 'text-black', 'col-span-2');
              totalDiscountDiv.innerText = 'Total Discount';
              couponSection.appendChild(totalDiscountDiv);

              let discountAmountDiv = document.createElement('div');
              discountAmountDiv.classList.add('text-xl', 'text-black');
              discountAmountDiv.innerText = `-${discount}`;

              couponSection.appendChild(discountAmountDiv);
            } else if (couponField.value === 'Couple 20') {
              const discount = (totalAmount * 20) / 100;
              totalAmount -= discount;
              grandTotal.innerText = totalAmount;
              couponBtn.remove();
              couponField.remove();
              let totalDiscountDiv = document.createElement('div');
              totalDiscountDiv.classList.add('text-xl', 'text-black', 'col-span-2');
              totalDiscountDiv.innerText = 'Total Discount';
              couponSection.appendChild(totalDiscountDiv);

              let discountAmountDiv = document.createElement('div');
              discountAmountDiv.classList.add('text-xl', 'text-black');
              discountAmountDiv.innerText = `-${discount}`;
              couponSection.appendChild(discountAmountDiv);
            } else {
              alert('Invalid Coupon');
            }
          });
        }
      } else {
        alert('You can only select up to 4 seats.');
      }
    } else {
      alert('This seat is already selected.');
    }
  });
}
