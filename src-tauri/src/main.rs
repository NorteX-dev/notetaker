#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rusqlite::Connection;

#[tauri::command]
fn save(content: &str) {
    println!("Saving: {}", content);
}

fn setup_db() {
    let conn = Connection::open("test.db").unwrap();

}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            setup_db();
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![save])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
