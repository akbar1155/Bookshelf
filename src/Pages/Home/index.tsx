import React, { useState } from 'react';
import { Button, Modal, Form, Input, message, Upload } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import BookCard from '../../Components/Books/index'; // Import the BookCard component

interface Book {
    id: number;
    title: string;
    author: string;
    status: string;
    image?: string;
}

const Homepage: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    const handleAddBook = (values: any) => {
        const newBook: Book = {
            id: books.length + 1,
            title: values.title,
            author: values.author,
            status: 'New',
            image: values.image ? values.image[0].thumbUrl : undefined,
        };
        setBooks([...books, newBook]);
        setIsModalVisible(false);
        form.resetFields();
        message.success('Book added successfully');
    };

    const handleDeleteBook = (id: number) => {
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
        message.success('Book deleted successfully');
    };

    return (
        <div className='container'>
            <div className='w-full flex justify-center'>

                <Button className='m-4 h-12 w-60 text-xl' type="primary" onClick={showModal} icon={<PlusOutlined />}>
                    Add Book
                </Button>
            </div>
            <Modal
                title="Add Book"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form form={form} onFinish={handleAddBook}>
                    <Form.Item
                        name="title"
                        label="Title:"
                        rules={[{ required: true, message: 'Please enter the title' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="author"
                        label="Author"
                        rules={[{ required: true, message: 'Please enter the author' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="image"
                        label="Choose Image:"
                        valuePropName="fileList"
                        getValueFromEvent={(e) => e.fileList}
                    >
                        <Upload name="logo" listType="picture">
                            <Button icon={<UploadOutlined />}>Upload Image</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">
                            Add
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <div className="grid grid-cols-3 gap-4 mt-4">
                {books.map(book => (
                    <BookCard key={book.id} book={book} onDelete={handleDeleteBook} />
                ))}
            </div>
        </div>
    );
};

export default Homepage;
