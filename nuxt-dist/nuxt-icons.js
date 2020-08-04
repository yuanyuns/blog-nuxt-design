export default async function (ctx, inject) {
  const icons = {"64x64":"/_nuxt/icons/icon_64.13caaf.png","120x120":"/_nuxt/icons/icon_120.13caaf.png","144x144":"/_nuxt/icons/icon_144.13caaf.png","152x152":"/_nuxt/icons/icon_152.13caaf.png","192x192":"/_nuxt/icons/icon_192.13caaf.png","384x384":"/_nuxt/icons/icon_384.13caaf.png","512x512":"/_nuxt/icons/icon_512.13caaf.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
