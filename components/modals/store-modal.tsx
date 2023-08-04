"use-client"
import { useStoreModal } from "@/hooks/use-store-modal";
import {Modal} from "../ui/modal";
export const StoreModal =() => {
    const StoreModal= useStoreModal(); 

    return ( 
    <Modal
    title="create store"
    description="Add a new store"
    isOpen={StoreModal.isOpen}
    onClose={StoreModal.onClose}>
        Future cretea store from 
    </Modal>
)}