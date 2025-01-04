import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

export default function NoteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };
  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          className=" bg-green-600 hover:bg-green-800  rounded p-1 mt-2 transition duration-30 ease-in-out tracking-wide  "
          onPress={() => handleOpen()}
        >
          View
        </Button>
      </div>
      <Modal isOpen={isOpen} size="lg" onClose={onClose}>
        <ModalContent className="bg-slate-800">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
                  risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
                  risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
                  risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
                  risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat
                  elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
                  quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
                  eiusmod.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat
                  elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
                  quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
                  eiusmod.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="text-red-500 p-2 hover:bg-opacity-20 hover:bg-red-300 transition duration-30 ease-in-out "
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  className="text-green-500 p-2 hover:bg-opacity-20 hover:bg-green-300 transition duration-30 ease-in-out  "
                  onPress={onClose}
                >
                  Edit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
