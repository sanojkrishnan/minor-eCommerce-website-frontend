import React from "react";

function CartCard() {
  return (
    <>
      <div class="w-full p-6 bg-neutral-primary-soft">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-2xl font-semibold leading-none text-heading">
            Your Cart
          </h5>
        </div>
        <div class="flow-root p-4">
          <ul role="list" class="divide-y divide-default">
            <li class="py-4 sm:py-4 h-auto border-b-gray-200 shadow-lg">
              <div class="flex items-center gap-2">
                <div class="shrink-0">
                  <img
                    class=" max-h-50 w-auto rounded-lg"
                    src="/xcLa2kimeQeVMGWzQSjFRS-1200-80.jpg"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0 ms-10">
                  <p class="font-medium text-heading truncate">Neil Sims</p>
                  <p class="text-sm text-body truncate">email@windster.com</p>
                  
                </div>
                <div class="inline-flex items-center me-10 font-medium text-heading">
                  ₹320
                  
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CartCard;
