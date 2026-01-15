import AddSection from "@/component/(admin-course-pages)/add-section/AddSection"
import SideBar from "@/component/general/SideBar"

export default function AdminCourse() {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto px-10 py-10">
                <AddSection />
            </main>
        </div>
    )
}