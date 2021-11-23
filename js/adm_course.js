/* PRIVATE */
(() => {

    // View preview Banner
    // #event #function #filereader-event-function
    let preview_banner_img = event => document.querySelector('.block_banner .banner_image').style.backgroundImage = "url(" + event.target.result + ")";
    document.querySelector('.block_banner input').addEventListener('change', event => preview_input_img(event.target.files[0], preview_banner_img));

    // View preview Gallery. Photo 1
    // #event #function #filereader-event-function
    document.querySelectorAll('.gallery_block .photos input').forEach(element => {
        let preview_gallery_img = event => element.closest('label').style.backgroundImage = "url(" + event.target.result + ")";
        element.addEventListener('change', event => preview_input_img(event.target.files[0], preview_gallery_img))
    });

    // Remove Experience item
    // #function #server
    let remove_exp_item = (event) => {
        /* -- POST TO SERVER -- */

        event.target.closest('.exp_item').remove();
    };

    // Remove Experience item
    // #event
    document.querySelectorAll('.experience_block .icon_remove').forEach(element => element.addEventListener('click', remove_exp_item));

    // Add Experience item
    document.querySelector('.exp_add').addEventListener('click', () => {
        /* -- POST-GET NEW ID FROM SERVER -- */

        let exp_item = document.getElementById('tpl_exp_item').content.cloneNode(true);
        exp_item.querySelector('.icon_remove').addEventListener('click', remove_exp_item);
        document.querySelector('.exp_list').append(exp_item);
    });

    // Open/Hide Lecture items
    // #function
    let toggle_lecture_item = (event) => event.target.closest('.lecture_item').classList.toggle('open');
    let open_lecture_item = (event) => event.target.closest('.lecture_item').classList.add('open');

    // Open/Hide Lecture items
    // #event
    document.querySelectorAll('.lectures_block .icon_down').forEach(element => element.addEventListener('click', toggle_lecture_item));
    document.querySelectorAll('.lectures_block .text').forEach(element => element.addEventListener('focus', open_lecture_item));

    // Remove Lecure item
    // #function #server
    let remove_lecture_item = (event) => {
        /* -- POST TO SERVER -- */

        event.target.closest('.lecture_item').remove();
    };

    // Remove Lecture item
    // #event
    document.querySelectorAll('.lectures_block .icon_remove').forEach(element => element.addEventListener('click', remove_lecture_item));

    // Remove FAQ items
    // #function #server
    let remove_faq_item = (event) => {
        /* -- POST TO SERVER -- */

        event.target.closest('.faq_item').remove();
    };

    // Remove FAQ items
    // #event
    document.querySelectorAll('.faq_block .icon_remove').forEach(element => element.addEventListener('click', remove_faq_item));

    // Open/Hide FAQ items
    // #function
    let toggle_faq_item = (event) => event.target.closest('.faq_item').classList.toggle('open');
    let open_faq_item = (event) => event.target.closest('.faq_item').classList.add('open');

    // Open/Hide FAQ items
    // #event
    document.querySelectorAll('.faq_block .icon_down').forEach(element => element.addEventListener('click', toggle_faq_item));
    document.querySelectorAll('.faq_block .text').forEach(element => element.addEventListener('focus', open_faq_item));

    // Add FAQ item
    document.querySelector('.faq_add').addEventListener('click', () => {
        /* -- POST-GET NEW ID FROM SERVER -- */

        let faq_item = document.getElementById('tpl_faq_item').content.cloneNode(true);
        faq_item.querySelector('.icon_remove').addEventListener('click', remove_faq_item);
        faq_item.querySelector('.icon_down').addEventListener('click', toggle_faq_item);
        faq_item.querySelectorAll('.text').forEach(element => element.addEventListener('click', open_faq_item));
        document.querySelector('.faq_list').append(faq_item);
    });

    // Add Lecture item
    document.querySelector('.add_lecture').addEventListener('click', () => {
        /* -- POST-GET NEW ID FROM SERVER -- */

        let lecture_item = document.getElementById('tpl_lecture_item').content.cloneNode(true);
        lecture_item.querySelector('.title .num').innerHTML = document.querySelectorAll('.lecture_item').length + 1;
        lecture_item.querySelector('.icon_remove').addEventListener('click', remove_lecture_item);
        lecture_item.querySelector('.icon_down').addEventListener('click', toggle_lecture_item);
        lecture_item.querySelectorAll('.text').forEach(element => element.addEventListener('focus', open_lecture_item));
        document.querySelector('.lectures_list').append(lecture_item);
    });
})();