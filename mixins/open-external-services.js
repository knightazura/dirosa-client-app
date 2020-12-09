import ENV from '@/services/env'

const customerServiceWhatsApp = {
    methods: {
        openCSWhatsApp() {
            let parsedNumber = ENV.cs_number.replace('0', '62')
        
            window.open(`https://wa.me/${parsedNumber}`)
        }
    }
}

export {
    customerServiceWhatsApp
}