import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Modal, { ModalProps } from './index';
import Text from '../text';

const meta: Meta = {
    component: Modal,
    parameters: {
        controls: { expanded: true },
    },
    title: 'Modal',
};

export default meta;

const Template: Story<ModalProps> = (args) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow((curr) => !curr);
    };

    return (
        <>
            <button
                type="button"
                onClick={handleShow}
            >
                Show
            </button>
            <Modal
                {...args}
                show={show}
                onClose={handleShow}
            >Test
            </Modal>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    show: true,
};

const TemplateContent: Story<ModalProps> = (args) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow((curr) => !curr);
    };

    return (
        <>
            <button
                type="button"
                onClick={handleShow}
            >
                Show
            </button>
            <Modal
                {...args}
                show={show}
                onClose={handleShow}
            >
                <Modal.Content>
                    <Modal.Header onClose={() => setShow(false)}>Allow Location Tracking?</Modal.Header>
                    <Modal.Body>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and type setting industry.
                            Lorem Ipsum has been standard dummy text.
                        </Text>
                    </Modal.Body>
                    <Modal.Footer
                        onClose={() => setShow(false)}
                        onConfirm={() => setShow(false)}
                    />
                </Modal.Content>
            </Modal>
        </>
    );
};

export const Content = TemplateContent.bind({});
Content.args = {
    show: true,
};
