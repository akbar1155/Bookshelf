import React, { useState } from 'react';
import Input, { SearchProps } from 'antd/es/input';
import { AudioOutlined } from '@ant-design/icons';
import UserRegistryModal from '../RegUser';
const Header: React.FC = () => {
    const [isUserRegistryModalVisible, setUserRegistryModalVisible] = useState(false);
    const toggleUserRegistryModal = () => {
        setUserRegistryModalVisible(!isUserRegistryModalVisible);
    };
    const { Search } = Input;
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1677ff',
            }}
        />
    );
    return (
        <div className=" bg-white w-full  ">
            <div className='flex items-center justify-between mo w-[1250px] p-2 '>

                <div className="flex items-center ">

                    <p className=" text-2xl font-mono">Bookshelf</p>
                </div>

                <div>
                    <Search
                        placeholder="Qidiruv...."
                        enterButton="Qidiruv"
                        size="large"
                        suffix={suffix}
                        onSearch={onSearch}
                    />
                </div>
                <div className='flex gap-7 justify-center items-center'>

                    <UserRegistryModal visible={isUserRegistryModalVisible} onClose={toggleUserRegistryModal} />
                </div>

            </div>
        </div>
    );
};

export default Header;
