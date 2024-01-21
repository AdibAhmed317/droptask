import React from 'react';
import { Modal } from 'flowbite-react';
import { Button } from '../ui/button';
import CreateTeamForm from '../forms/CreateTeamForm';

interface CreateTeamModalProps {
  openModal: boolean;
  onClose: () => void;
}

const CreateTeamModal: React.FC<CreateTeamModalProps> = ({
  openModal,
  onClose,
}) => {
  return (
    <Modal show={openModal} onClose={onClose}>
      <Modal.Header>Create Team (5 left)</Modal.Header>
      <Modal.Body>
        <CreateTeamForm />
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

export default CreateTeamModal;
