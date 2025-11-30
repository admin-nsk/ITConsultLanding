import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Consent() {
  const navigate = useNavigate();

  const handleCopy = (e: React.ClipboardEvent) => {
    e.preventDefault();
    return false;
  };

  const handleSelectStart = (e: React.SyntheticEvent) => {
    e.preventDefault();
    return false;
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Button>
        
        <div
          className="prose prose-lg max-w-none bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm"
          style={{ userSelect: "none" }}
          onCopy={handleCopy}
          onSelectStart={handleSelectStart}
          onContextMenu={handleContextMenu}
        >
          <h1 className="text-3xl font-bold mb-4">СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ</h1>
          
          <p className="mb-4">г. Новосибирск</p>
          <p className="mb-8">
            <strong>Дата публикации:</strong> 28.11.2025
          </p>
          
          <p className="mb-8">
            Настоящим, в соответствии с Федеральным законом от 27 июля 2006 г. № 152-ФЗ «О персональных данных», я, заполняя (и/или отправляя) веб-форму на сайте https://neurosystems.tech (далее — «Сайт»), свободно, своей волей и в своих интересах выражаю согласие оператору — <strong>«NeuroSystems»</strong> Петрову Алексею Владимировичу ИНН: 543209761435, адрес электронной почты: support@neurosystems.tech, на обработку моих персональных данных (далее — «Оператор»).
          </p>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Состав персональных данных</h2>
            <p className="mb-4">Я подтверждаю, что предоставляю следующие данные:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>фамилия, имя, отчество;</li>
              <li>адрес электронной почты (e-mail);</li>
              <li>номер телефона;</li>
              <li>иные данные, которые я добровольно указываю в формах на Сайте (например, должность, организация, комментарии).</li>
            </ul>
            <p className="mb-4">
              Также автоматически могут обрабатываться технические данные (IP-адрес, cookie, данные о браузере и устройстве, метаданные и др.), если это необходимо для работы Сайта.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Цели обработки персональных данных</h2>
            <p className="mb-4">Мои персональные данные могут использоваться Оператором в следующих целях:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>предоставление информации, материалов, консультаций, демонстраций, услуг, на которые я запросил(а) через Сайт;</li>
              <li>обеспечение обратной связи, направление уведомлений, ответов на мои обращения;</li>
              <li>заключение и исполнение договоров и соглашений;</li>
              <li>направление новостных и маркетинговых материалов (при отдельном согласии);</li>
              <li>улучшение качества работы Сайта и предоставляемых услуг;</li>
              <li>выполнение требований законодательства Российской Федерации.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Правовые основания обработки</h2>
            <p className="mb-4">Основанием обработки моих персональных данных является:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>настоящее согласие;</li>
              <li>выполнение условий договоров, стороной которых я являюсь;</li>
              <li>исполнение обязанностей, возложенных на Оператора законом;</li>
              <li>иные случаи, предусмотренные ст. 6 Закона № 152-ФЗ.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Срок действия согласия</h2>
            <p className="mb-4">
              Настоящее согласие действует <strong>до достижения целей обработки</strong> или до момента его <strong>отзыва</strong>.
            </p>
            <p className="mb-4">
              Я вправе <strong>в любой момент отозвать согласие</strong>, направив письменное уведомление на адрес Оператора:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>email:</strong> support@neurosystems.tech</li>
              <li><strong>почтовый адрес:</strong> г.Новосибирск ул.Тимирязева 77 кв 34.</li>
            </ul>
            <p className="mb-4">
              После получения уведомления Оператор прекращает обработку моих персональных данных, за исключением случаев, предусмотренных законом (например, для хранения по налоговым и бухгалтерским требованиям).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Условия и способы обработки</h2>
            <p className="mb-4">
              5.1. Обработка персональных данных может осуществляться как с использованием средств автоматизации, так и без них (смешанным способом).
            </p>
            <p className="mb-4">
              5.2. Оператор вправе поручить обработку данных третьим лицам на основании заключённого договора при условии соблюдения ими требований к конфиденциальности и безопасности персональных данных.
            </p>
            <p className="mb-4">
              5.3. При необходимости Оператор может осуществлять <strong>обезличивание</strong> данных, а также хранить их в обезличенной форме в аналитических целях.
            </p>
            <p className="mb-4">
              5.4. Трансграничная передача персональных данных допускается только в государства, обеспечивающие надлежащую защиту прав субъектов данных или с моего отдельного письменного согласия.
            </p>
            <p className="mb-4">
              5.5. Персональные данные хранятся не дольше, чем требуется для достижения целей обработки.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Меры по защите персональных данных</h2>
            <p className="mb-4">
              Оператор принимает все необходимые правовые, организационные и технические меры для защиты персональных данных от несанкционированного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий в соответствии с требованиями законодательства РФ, включая Постановление Правительства РФ № 1119 и Приказ ФСТЭК № 21.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Права субъекта персональных данных</h2>
            <p className="mb-4">Я проинформирован(а), что имею следующие права:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>получать сведения об обработке моих персональных данных;</li>
              <li>требовать уточнения, блокировки или уничтожения данных;</li>
              <li>отзывать согласие;</li>
              <li>обжаловать действия или бездействие Оператора в Роскомнадзор или в суд;</li>
              <li>требовать переноса данных (если применимо).</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Контактные данные Оператора</h2>
            <p className="mb-2"><strong>«NeuroSystems»</strong></p>
            <p className="mb-2">ФИО: Петров Алексей Владимирович</p>
            <p className="mb-2">Электронная почта: support@neurosystems.tech</p>
            <p className="mb-2">Телефон: +7-961-218-3656</p>
            <p className="mb-4">Веб-сайт: https://neurosystems.tech</p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Подтверждение согласия</h2>
            <p className="mb-4">Отправляя форму на Сайте, я подтверждаю, что:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>полностью ознакомлен(а) с текстом настоящего Согласия;</li>
              <li>понимаю цели и условия обработки моих персональных данных;</li>
              <li>выражаю своё согласие добровольно и в своих интересах.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

