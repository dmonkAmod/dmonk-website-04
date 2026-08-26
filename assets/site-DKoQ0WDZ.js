var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((()=>{var e=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <header class="border-b border-[#eeeeee] bg-white">

        <!-- Main navbar -->
        <div
          class="
            flex
            h-[68px]
            items-center
            justify-between
            px-5
            md:h-[76px]
            md:px-8
            xl:h-[84px]
          "
        >

          <!-- Logo / Home -->
          
          <a href="/" aria-label="dMonk home" class="shrink-0">
            <img
              src="/images/dmonk-logo.png"
              alt="dMonk"
              class="h-auto w-[120px]"
            />
          </a>


          <!-- Desktop navigation -->
          <nav
            class="
              hidden
              items-center
              gap-8
              text-[14px]
              text-[#444444]
              md:flex
            "
            aria-label="Main navigation"
          >
            <a
              href="/#problem"
              class="transition-colors hover:text-black"
            >
              Problem
            </a>

            <a
              href="/#solution"
              class="transition-colors hover:text-black"
            >
              Solution
            </a>

            <a
              href="/#how-it-works"
              class="transition-colors hover:text-black"
            >
              How it works
            </a>

            <a
              href="/#benefits"
              class="transition-colors hover:text-black"
            >
              Benefits
            </a>

            <a
              href="https://app.server.dmonk.ai/login"
              class="
                ml-4
                font-medium
                text-black
                transition-opacity
                hover:opacity-60
              "
            >
              Login
            </a>
          </nav>


          <!-- Mobile menu button -->
          <button
            type="button"
            class="
              text-[14px]
              text-[#333333]
              md:hidden
            "
            aria-expanded="false"
            aria-controls="mobile-navigation"
            data-menu-button
          >
            Menu
          </button>

        </div>


        <!-- Mobile navigation -->
        <nav
          id="mobile-navigation"
          class="
            hidden
            border-t
            border-[#eeeeee]
            bg-white
            px-5
            pb-6
            pt-4
            md:hidden
          "
          aria-label="Mobile navigation"
          data-mobile-menu
        >
          <div
            class="
              flex
              flex-col
              gap-5
              text-[16px]
              text-[#444444]
            "
          >
            <a href="/#problem" data-menu-link>
              Problem
            </a>

            <a href="/#solution" data-menu-link>
              Solution
            </a>

            <a href="/#how-it-works" data-menu-link>
              How it works
            </a>

            <a href="/#benefits" data-menu-link>
              Benefits
            </a>

            <a
              href="https://app.server.dmonk.ai/login"
              class="
                mt-2
                border-t
                border-[#eeeeee]
                pt-5
                font-medium
                text-black
              "
              data-menu-link
            >
              Login
            </a>
          </div>
        </nav>

      </header>
    `;let e=this.querySelector(`[data-menu-button]`),t=this.querySelector(`[data-mobile-menu]`),n=this.querySelectorAll(`[data-menu-link]`),r=()=>{t.classList.add(`hidden`),e.textContent=`Menu`,e.setAttribute(`aria-expanded`,`false`)},i=()=>{t.classList.remove(`hidden`),e.textContent=`Close`,e.setAttribute(`aria-expanded`,`true`)};e.addEventListener(`click`,()=>{e.getAttribute(`aria-expanded`)===`true`?r():i()}),n.forEach(e=>{e.addEventListener(`click`,r)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&r()})}};customElements.get(`site-navbar`)||customElements.define(`site-navbar`,e)})),n=e((()=>{var e=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <footer class="border-t border-[#eeeeee]">
        <div
          class="
            grid
            gap-10
            px-5 py-10
            text-[14px]
            leading-6
            text-[#666666]
            md:grid-cols-12
            md:px-8
            md:py-12
          "
        >

          <div class="md:col-span-4">
            <p>
              Contact:
              <a
                href="mailto:sales@dmonk.ai"
                class="text-[#444444] transition-colors hover:text-black"
              >
                sales@dmonk.ai
              </a>
            </p>

            <p>dMonk.ai ApS — CVR 44832283</p>
            <p>Emdrupvej 14, 2100 Copenhagen, Denmark</p>
          </div>

          <nav
            class="flex flex-col items-start md:col-span-4"
            aria-label="Legal"
          >
            <a href="/terms/" class="transition-colors hover:text-black">
              Terms of Use
            </a>

            <a href="/privacy-website/" class="transition-colors hover:text-black">
              Privacy Policy for Website Visitors
            </a>

            <a href="/privacy-users/" class="transition-colors hover:text-black">
              Privacy Policy for dMonk Users
            </a>
          </nav>

          <div class="md:col-span-4 md:text-right">

            <div class="flex gap-4 md:justify-end">
              <a href="#" class="transition-colors hover:text-black">
                LinkedIn
              </a>

              <a href="#" class="transition-colors hover:text-black">
                YouTube
              </a>
            </div>

            <p class="mt-1 text-[#999999]">
              © 2026 dMonk.ai. All rights reserved.
            </p>

            <p class="text-[#aaaaaa]">
              Microsoft Verified Partner · EU GDPR Compliant
            </p>

          </div>

        </div>
      </footer>
    `}};customElements.define(`site-footer`,e)})),r=e((()=>{t(),n()}));export{r as t};