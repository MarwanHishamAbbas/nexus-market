const { placeholderProudcts } = require('./placeholder')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

console.log('data', placeholderProudcts)

async function main() {
  await Promise.all(
    placeholderProudcts?.map(async (product) => {
      await prisma.product.upsert({
        where: {
          slug: product.slug,
        },
        update: product,
        create: product,
      })
    })
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('Error while seeding database:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
