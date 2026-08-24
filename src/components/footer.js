const base = import.meta.env.BASE_URL
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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
            <a href="${base}terms/" class="transition-colors hover:text-black">
              Terms of Use
            </a>

            <a href="${base}privacy-website/" class="transition-colors hover:text-black">
              Privacy Policy for Website Visitors
            </a>

            <a href="${base}privacy-users/" class="transition-colors hover:text-black">
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
    `
  }
}

customElements.define('site-footer', SiteFooter)
