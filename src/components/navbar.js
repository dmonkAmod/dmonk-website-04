class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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
              href="#"
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
              href="#"
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
    `

    const button = this.querySelector('[data-menu-button]')
    const menu = this.querySelector('[data-mobile-menu]')
    const links = this.querySelectorAll('[data-menu-link]')

    const closeMenu = () => {
      menu.classList.add('hidden')
      button.textContent = 'Menu'
      button.setAttribute('aria-expanded', 'false')
    }

    const openMenu = () => {
      menu.classList.remove('hidden')
      button.textContent = 'Close'
      button.setAttribute('aria-expanded', 'true')
    }

    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true'

      if (isOpen) {
        closeMenu()
      } else {
        openMenu()
      }
    })

    links.forEach((link) => {
      link.addEventListener('click', closeMenu)
    })

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    })
  }
}

if (!customElements.get('site-navbar')) {
  customElements.define('site-navbar', SiteNavbar)
}