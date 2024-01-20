import React from 'react';
import { Modal } from 'flowbite-react';
import { Button } from '../ui/button';
import CreateOrganizationForm from '../forms/createorgform';

interface CreateOrganizationModalProps {
  openModal: boolean;
  onClose: () => void;
}

const CreateOrganizationModal: React.FC<CreateOrganizationModalProps> = ({
  openModal,
  onClose,
}) => {
  return (
    <Modal show={openModal} onClose={onClose}>
      <Modal.Header>Create Organization (5 left)</Modal.Header>
      <Modal.Body>
        <CreateOrganizationForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant='default'>
          Create
        </Button>
        <Button variant='destructive' onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateOrganizationModal;
