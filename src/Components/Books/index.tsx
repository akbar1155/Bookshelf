import React, { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface Book {
    id: number;
    title: string;
    author: string;
    status: string;
    image?: string;
}

interface Props {
    book: Book;
    onDelete: (id: number) => void;
}

const BookCard: React.FC<Props> = ({ book, onDelete }) => {
    const [isModalVisible, setIsModalVisible] = useState(false); // Modal oynasining ko'rinishi
    const [editedBook, setEditedBook] = useState<Book>(book); // Tahrirlangan kitob ma'lumotlarini saqlash

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleDelete = () => {
        onDelete(book.id);
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedBook({ ...editedBook, title: e.target.value });
    };

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedBook({ ...editedBook, author: e.target.value });
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedBook({ ...editedBook, status: e.target.value });
    };

    return (
        <Card
            key={book.id}
            title={book.title}
            extra={
                <>
                    <Button type="text" style={{ backgroundColor: '#EFF2F5', color: "black" }} icon={<EditOutlined />} className="mr-2" onClick={showModal}>
                        Edit
                    </Button>
                    <Button danger type="primary" icon={<DeleteOutlined />} onClick={handleDelete}>
                        Delete
                    </Button>
                </>
            }
        >
            {book.image && (
                <img
                    src={book.image}
                    alt={book.title}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '150px',
                        marginBottom: '8px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }}
                />
            )}
            <p>Author: {book.author}</p>
            <p>Status: {book.status}</p>

            <Modal
                title="Edit Book"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleCancel}>
                        Save
                    </Button>,
                ]}
            >
                <div>
                    <label>Book Title: </label>
                    <input className='bg-[#F0F7FF] h-6 ' type="text" value={editedBook.title} onChange={handleTitleChange} />
                </div>
                <div>
                    <label>Author: </label>
                    <input className='bg-[#F0F7FF] h-6 ' type="text" value={editedBook.author} onChange={handleAuthorChange} />
                </div>
                <div>
                    <label>Status: </label>
                    <input className='bg-[#F0F7FF] h-6 ' type="text" value={editedBook.status} onChange={handleStatusChange} />
                </div>
            </Modal>
        </Card>
    );
};

export default BookCard;
