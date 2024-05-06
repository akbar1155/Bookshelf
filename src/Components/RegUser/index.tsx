import React, { useState } from 'react';
import { Modal, Form, Input, Button, ConfigProvider } from 'antd';
import { TinyColor } from '@ctrl/tinycolor';
interface User {
    username: string;
    email: string;
    password: string;
}


const colors3 = ['#40e495', '#30dd8a', '#2bb673'];
const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

const UserRegistryModal: React.FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
    const [user, setUser] = useState<User>({ username: '', email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log('User registered:', user);
        onClose();
    };

    return (
        <div>


            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary: `linear-gradient(116deg,  ${colors3.join(', ')})`,
                            colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(colors3).join(', ')})`,
                            colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(colors3).join(', ')})`,
                            lineWidth: 0,
                        },
                    },
                }}
            >
                <Button onClick={onClose} type='primary'>Log in</Button>
            </ConfigProvider>
            <Modal title="User Registry" visible={visible} onCancel={onClose} footer={null}>
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item label="Username">
                        <Input name="username" value={user.username} onChange={handleChange} />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input type="email" name="email" value={user.email} onChange={handleChange} />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input.Password name="password" value={user.password} onChange={handleChange} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default UserRegistryModal;
