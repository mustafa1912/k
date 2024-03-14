import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import img from '../../assets/imgs/logo.webp';

function whatsappChatPlugin({ t, i18n, settiengs, langState, api }) {

    const buttonStyle = {
        backgroundColor: '#25d366', // Change background color
        borderColor: '#25d366', // Change border color
        borderRadius: '50%', // Make button circular
        width: '60px', // Set width
        height: '60px', // Set height
        bottom: '30px', // Adjust position from bottom
        right: '30px', // Adjust position from right
    };

    return (
        <FloatingWhatsApp
            // phoneNumber={'+201158091380'}
            phoneNumber={settiengs.tel1 && '+2' + settiengs.tel1}
            accountName={`${langState ? settiengs.name_ar : settiengs.name_en}`} //
            message="مرحبا، كيف أستطيع مساعدتك؟"
            dataTip="يتم الرد عادةً خلال ساعة واحدة"
            buttonStyle={buttonStyle}
            allowEsc
            allowClickAway
            notification
            notificationSound
            avatar={img} />
    )
}

export default (whatsappChatPlugin)
