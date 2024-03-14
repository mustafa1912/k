import React, { useState } from 'react';
import style_ar from './administrativeDevice.module.css'
import style_en from './administrativeDevice_en.module.css'
import { useTranslation } from 'react-i18next';
import { OrganizationChart } from 'primereact/organizationchart';
function AdministrativeDevice() {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en

    const [selection, setSelection] = useState([]);
    const [data] = useState([
        {
            expanded: true,
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                name: ' ا.د عميد المعهد ',
                title: ' رئيس مجلس الادارة '
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                        name: ' ياسر عبدالمنعم محمد ريحان  ',
                        title: 'عضو '
                    },
                
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                        name: ' ياسر عبدالمنعم محمد ريحان  ',
                        title: 'عضو '
                    },
                
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                        name: ' ياسر عبدالمنعم محمد ريحان  ',
                        title: 'عضو '
                    },
                
                } 
                 
            ]
        }
    ]);

    const nodeTemplate = (node) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column">
                    <div className="flex flex-column align-items-center">
                        <img alt={node.data.name} src={node.data.image} className="mb-3 w-3rem h-3rem" />
                        <span className="font-bold mb-2">{node.data.name}</span>
                        <span>{node.data.title}</span>
                    </div>
                </div>
            );
        }

        return node.label;
    };



    return (
        <React.Fragment>
            <section className={`${style.admin_structure} my-2 my-md-5`}>
                <div className="container">
                    <div className={`${style.admin_structure_title} `}>
                        <h2 className={`${style.title} m-auto`}  >الهيكل الاداري للوحدة</h2>
                    </div>
                    <div className="row">
                        <div className="overflow-x-auto">
                            <OrganizationChart value={data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AdministrativeDevice
