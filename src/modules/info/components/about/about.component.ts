import {Component} from '@angular/core';

@Component({
    templateUrl: 'about.component.html'
})
export class AboutComponent {
    public buy(): void {
        const pr = new PaymentRequest(
            [{
                'supportedMethods': ['basic-card'],
                'data': {'supportedNetworks': ['mastercard', 'visa']}
            }, {
                'supportedMethods': ['https://apple.com/apple-pay'],
                'data': {
                    'version': 2,
                    'supportedNetworks': ['amex', 'jcb', 'visa', 'mastercard'],
                    'countryCode': 'IE',
                    'merchantIdentifier': 'merchant.org.liebel.payment-demo',
                    'merchantCapabilities': ['supportsDebit', 'supportsCredit', 'supports3DS']
                }
            }],
            {
                'displayItems': [{'label': 'Todo Premium (1 Jahr)', 'amount': {'currency': 'EUR', 'value': '25.92'}}, {
                    'label': '19% MwSt.',
                    'amount': {'currency': 'EUR', 'value': '6.08'}
                }], 'total': {'label': 'Summe', 'amount': {'currency': 'EUR', 'value': '32'}}, 'shippingOptions': []
            },
            {
                'requestPayerName': true,
                'requestPayerPhone': false,
                'requestPayerEmail': true,
                'requestShipping': false
            }
        );

        pr['onmerchantvalidation'] = evt => fetch('https://89f3b29c.ngrok.io', { method: 'POST', body: evt.validationURL }).then(res => res.json()).then(res => evt.complete(res));

        pr.show().then(() => void 0);
    }
}
