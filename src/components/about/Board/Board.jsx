import React from 'react';
import './style.css'
import style_ar from './Board.module.css'
import style_en from './Board_en.module.css'
import { OrganizationChart } from 'primereact/organizationchart';

function Board({ api, t, i18n, langState, dataBoard, title }) {
    let style = langState ? style_ar : style_en

    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    const convertData = (sourceData) => {
        const parentResult = {
            expanded: true,
            type: 'person',
            kind: '',
            className: `${style.bg_purple_500} text-white d-none`,
            style: { borderRadius: "12px" },
            data: {},
            children: []
        };

        sourceData.forEach((item) => {
            const kind = item.kind === 0 ? 0 : 1;
            const className = item.kind === 0 ? `${style.bg_indigo_500} text-white` : `${style.bg_teal_500} text-white`;
            const children = item.kind === 1 ? [{ label: `${t('Member-Board')}`, className: `${style.bg_purple_500} text-white p-2`, style: { borderRadius: '12px' } }] : [];

            const result = {
                expanded: true,
                type: 'person',
                kind,
                className,
                style: { borderRadius: "12px" },
                data: {
                    image: title ? item.doctors.photo : item.photo,
                    name: title ? item.doctors.name_ar : item.name_ar,
                },
                children: children
            };

            if (result.kind === 0) {
                parentResult.children.push(result);
            } else {
                if (parentResult.children.length > 0) {
                    parentResult.children[parentResult.children.length - 1].children.push(result);
                } else {
                    parentResult.children.push({
                        expanded: true,
                        type: 'person',
                        kind: '',
                        className: `${style.bg_teal_500} text-white`,
                        style: { borderRadius: "12px" },
                        data: {},
                        children: [result]
                    });
                }
            }
        });

        return [parentResult];
    };

    const convertedData = convertData(dataBoard);

    // src={imgSrc(node.data.image)}
    const nodeTemplate = (node) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column">
                    <div className="flex flex-column align-items-center">
                        {node.data.image &&
                            <img alt={node.data.name} src={imgSrc(node.data.image)} className={`${style.img} mb-3`} />
                        }
                        <small className="mb-2">{node.data.name}</small>
                    </div>
                </div>
            );
        };
        return node.label;
    }

    return (
        <section>
            <div className="overflow-scroll">
                <OrganizationChart value={convertedData} nodeTemplate={nodeTemplate} />
            </div>
        </section>
    )
}

export default Board
