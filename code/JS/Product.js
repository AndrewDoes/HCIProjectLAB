document.addEventListener("DOMContentLoaded", () => {
    const event1 = document.getElementById('event1');
    const event2 = document.getElementById('event2');
    const event3 = document.getElementById('event3');
    const gathering1 = document.getElementById('gathering1');
    const gathering2 = document.getElementById('gathering2');
    const mealBox1 = document.getElementById('mealBox1');
    const mealBox2 = document.getElementById('mealBox2');
    const mealBox3 = document.getElementById('mealBox3');

    if (window.innerWidth >= 768) {
        event1.addEventListener('click', () => {
            event2.classList.remove('inactive');
            event3.classList.remove('inactive');

            event2.classList.remove('active');
            event3.classList.remove('active');

            if (!event1.classList.contains('active')) {
                event1.classList.remove('inactive');
                event1.classList.add('active');
                event2.classList.add('inactive');
                event3.classList.add('inactive');
                return;
            }
            else {
                event1.classList.remove('active');
                event2.classList.remove('inactive');
                event3.classList.remove('inactive');
                return;
            }
        });

        event2.addEventListener('click', () => {
            event1.classList.remove('inactive');
            event3.classList.remove('inactive');

            event1.classList.remove('active');
            event3.classList.remove('active');

            if (!event2.classList.contains('active')) {
                event2.classList.remove('inactive');
                event2.classList.add('active');
                event1.classList.add('inactive');
                event3.classList.add('inactive');
                return;
            }
            else {
                event2.classList.remove('active');
                event1.classList.remove('inactive');
                event3.classList.remove('inactive');
                return;
            }
        });

        event3.addEventListener('click', () => {
            event1.classList.remove('inactive');
            event2.classList.remove('inactive');

            event1.classList.remove('active');
            event2.classList.remove('active');

            if (!event3.classList.contains('active')) {
                event3.classList.remove('inactive');
                event3.classList.add('active');
                event1.classList.add('inactive');
                event2.classList.add('inactive');
                return;
            }
            else {
                event3.classList.remove('active');
                event1.classList.remove('inactive');
                event2.classList.remove('inactive');
                return;
            }
        });

        gathering1.addEventListener('click', () => {
            gathering2.classList.remove('inactive')
            gathering2.classList.remove('active2')

            if (!gathering1.classList.contains('active2')) {
                gathering1.classList.remove('inactive');
                gathering1.classList.add('active2');
                gathering2.classList.add('inactive');
            }
            else {
                gathering1.classList.remove('active2');
                gathering2.classList.remove('inactive');
            }
        });

        gathering2.addEventListener('click', () => {
            gathering1.classList.remove('inactive')
            gathering1.classList.remove('active2')

            if (!gathering2.classList.contains('active2')) {
                gathering2.classList.remove('inactive');
                gathering2.classList.add('active2');
                gathering1.classList.add('inactive');
            }
            else {
                gathering2.classList.remove('active2');
                gathering1.classList.remove('inactive');
            }
        });

        mealBox1.addEventListener('click', () => {
            mealBox2.classList.remove('inactive');
            mealBox3.classList.remove('inactive');

            mealBox2.classList.remove('active');
            mealBox3.classList.remove('active');

            if (!mealBox1.classList.contains('active')) {
                mealBox1.classList.remove('inactive');
                mealBox1.classList.add('active');
                mealBox2.classList.add('inactive');
                mealBox3.classList.add('inactive');
                return;
            }
            else {
                mealBox1.classList.remove('active');
                mealBox2.classList.remove('inactive');
                mealBox3.classList.remove('inactive');
                return;
            }
        });

        mealBox2.addEventListener('click', () => {
            mealBox1.classList.remove('inactive');
            mealBox3.classList.remove('inactive');

            mealBox1.classList.remove('active');
            mealBox3.classList.remove('active');

            if (!mealBox2.classList.contains('active')) {
                mealBox2.classList.remove('inactive');
                mealBox2.classList.add('active');
                mealBox1.classList.add('inactive');
                mealBox3.classList.add('inactive');
                return;
            }
            else {
                mealBox2.classList.remove('active');
                mealBox1.classList.remove('inactive');
                mealBox3.classList.remove('inactive');
                return;
            }
        });

        mealBox3.addEventListener('click', () => {
            mealBox1.classList.remove('inactive');
            mealBox2.classList.remove('inactive');

            mealBox1.classList.remove('active');
            mealBox2.classList.remove('active');

            if (!mealBox3.classList.contains('active')) {
                mealBox3.classList.remove('inactive');
                mealBox3.classList.add('active');
                mealBox1.classList.add('inactive');
                mealBox2.classList.add('inactive');
                return;
            }
            else {
                mealBox3.classList.remove('active');
                mealBox1.classList.remove('inactive');
                mealBox2.classList.remove('inactive');
                return;
            }
        });
    }
});
